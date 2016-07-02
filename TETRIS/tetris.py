# -*- coding: utf-8 -*-
from random import randint
import pygame

pygame.mixer.init(44100, -16,2,2048)

pygame.mixer.music.load("tetris.wav")
pygame.mixer.music.set_volume(0.5)
pygame.mixer.music.play(-1)
#-------------------------------------------------------------------------
# 게임 상수
#-------------------------------------------------------------------------
UP, RIGHT, DOWN, LEFT = 0, 1, 2, 3
MIN, MAX = 0, 3
SPEED = { 'START': 500, 'DECREMENT': 50, 'MIN': 100 }
BOARD_WIDTH = 10; #게임 보드 가로 길이(블록갯수)
BOARD_HEIGHT = 20; #게임 보드 세로 길이(블록갯수)
NEXT_SIZE = 20;  #미리보기 블록 사이즈(픽셀)
CUR_SIZE = 36 #현재 블록 사이즈(픽셀)

#-------------------------------------------------------------------------
# 그래픽 상수
#-------------------------------------------------------------------------
SCREEN_WIDTH = 480
SCREEN_HEIGHT = 720
BLOCK_SIZE = 36

#-------------------------------------------------------------------------
# 전역 변수
#-------------------------------------------------------------------------
Board = [[None for col in range(10)] for row in range(20)] # 게임판 (x:10,y:20)
Running = False # 게임실행상태
TickTime = 0 # 게임경과시간
Tick = SPEED['START'] #
CurBlock = None # 현재 블록
NextBlock = None # 다음 블록
Rows = 0 # 없앤 행수
BlockBag = [] # 랜덤 블록 주머니

#-------------------------------------------------------------------------
# 전역 변수(그래픽)
#-------------------------------------------------------------------------
Screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
Gameboard = pygame.image.load("images/gameboard.png")
Nextboard = pygame.image.load("images/nextboard.png")
Clock = pygame.time

#-------------------------------------------------------------------------
# 테트리스 블록
#
# blocks: 각 요소는 회전방향에 따른 블록의 형태를 나타낸다.(0도, 90도, 180도, 270도)
#         각 요소는 16진수이며 가로세로 4x4형태의 블록이다.
#
#             0100 = 0x4 << 3 = 0x4000
#             0100 = 0x4 << 2 = 0x0400
#             1100 = 0xC << 1 = 0x00C0
#             0000 = 0x0 << 0 = 0x0000
#                               ------
#                               0x44C0
#-------------------------------------------------------------------------

I = { 'size': 4, 'blocks': (0x0F00, 0x2222, 0x00F0, 0x4444), 'color': (0,255,255) }  # cyan
J = { 'size': 3, 'blocks': (0x44C0, 0x8E00, 0x6440, 0x0E20), 'color': (0,0,255) }    # blue
L = { 'size': 3, 'blocks': (0x4460, 0x0E80, 0xC440, 0x2E00), 'color': (255,165,0) }  # orange
O = { 'size': 2, 'blocks': (0xCC00, 0xCC00, 0xCC00, 0xCC00), 'color': (255,255,0) }  # yellow
S = { 'size': 3, 'blocks': (0x06C0, 0x8C40, 0x6C00, 0x4620), 'color': (0,255,0) }    # green
T = { 'size': 3, 'blocks': (0x0E40, 0x4C40, 0x4E00, 0x4640), 'color': (128,0,128) }  # purple
Z = { 'size': 3, 'blocks': (0x0C60, 0x4C80, 0xC600, 0x2640), 'color': (255,0,0)    } # red

#-------------------------------------------------------------------------
# 게임 보드의 각 그리드 상태 설정 및 조회
#-------------------------------------------------------------------------
def getBlock(x, y):
	return Board[y][x]

def setBlock(x, y, type):
	Board[y][x] = type

#-------------------------------------------------------------------------
# 좌표에 대한 장애물 존재 여부
#-------------------------------------------------------------------------
def checkStuff(x, y):
	if (x < 0) or (x >= BOARD_WIDTH) or (y < 0) or (y >= BOARD_HEIGHT) or (getBlock(x,y) != None):
		return True
	else:
		return False

#-------------------------------------------------------------------------
# 제거한 행 수 설정 및 게임속도 조절
#-------------------------------------------------------------------------
def setRows(rows):
	global Rows
	global Tick

	Rows = rows
	Tick = max(SPEED['MIN'], SPEED['START'] - (SPEED['DECREMENT'] * Rows))

def addRows(rows):
	global Rows
	setRows(Rows + rows)

#-----------------------------------------------------
# 좌표에 대한 블럭 이동 가능 여부 조회
#-----------------------------------------------------
def occupied(type, x, y, dir):
	result = False
	row = 0
	col = 0
	block = type['blocks'][dir]

	bit = 0x8000
	while bit > 0:
		if block & bit > 0:
			result = checkStuff(x + col, y + row)
			if result:
				break

		col += 1
		if col == 4:
			col = 0
			row += 1

		bit = bit >> 1

	return result

def unoccupied(type, x, y, dir):
	return not occupied(type, x, y, dir)

#-----------------------------------------------------
# 랜덤한 블럭 생성
#-----------------------------------------------------
def randomBlock():
	global BlockBag

	if (len(BlockBag) == 0):
		BlockBag = [I,I,I,I,J,J,J,J,L,L,L,L,O,O,O,O,S,S,S,S,T,T,T,T,Z,Z,Z,Z]
	type = BlockBag.pop(randint(0,len(BlockBag)-1))
	return { 'blockType': type, 'dir': UP, 'x': randint(0, BOARD_WIDTH - type['size']), 'y': 0 }

#-----------------------------------------------------
# 블럭 이동 및 회전
#-----------------------------------------------------
def move(dir):
	x = CurBlock['x']
	y = CurBlock['y']

	if dir == RIGHT:
		x = x + 1
	elif dir == LEFT:
		x = x - 1
	elif dir == DOWN:
		y = y + 1

	if unoccupied(CurBlock['blockType'], x, y, CurBlock['dir']):
		CurBlock['x'] = x
		CurBlock['y'] = y
		return True
	else:
		return False

def rotate():
	x = CurBlock['x']
	y = CurBlock['y']

	if CurBlock['dir'] == MAX:
		newDir = MIN
	else:
		newDir = CurBlock['dir'] + 1

	if unoccupied(CurBlock['blockType'], x, y, newDir):
		CurBlock['dir'] = newDir

def drop():
	global Running

	if not move(DOWN):
		settle()
		removeLines()
		setCurrentBlock(NextBlock)
		setNextBlock()

		x = CurBlock['x']
		y = CurBlock['y']
		if occupied(CurBlock['blockType'], x, y, CurBlock['dir']):
			Running = False
	else:
		return False

#-----------------------------------------------------
# 블록이 착륙했을 때 상태를 게임 보드에 저장
#-----------------------------------------------------
def settle():
	type = CurBlock['blockType']
	block = CurBlock['blockType']['blocks'][CurBlock['dir']]
	x = CurBlock['x']
	y = CurBlock['y']
	row = 0
	col = 0
	bit = 0x8000
	while bit > 0:
		if block & bit > 0:
			setBlock(x + col, y + row, type)

		col += 1
		if col == 4:
			col = 0
			row += 1

		bit = bit >> 1



#-----------------------------------------------------
# 완성된 행 제거
#-----------------------------------------------------
def removeLine(row):
	y = row
	while y >= 0:
		x = 0
		while x < BOARD_WIDTH:
			if (y == 0):
				type = None
			else:
				type = getBlock(x, y-1)
			setBlock(x, y, type)
			x += 1
		y -= 1




def removeLines():
	rows = 0
	y = BOARD_HEIGHT - 1
	while y > 0:
		complete = True
		x = 0
		while x < BOARD_WIDTH:
			if (getBlock(x, y) == None):
				complete = False
			x += 1

		if complete:
			removeLine(y)
			y += 1
			rows += 1
		y -= 1

	if (rows > 0):
		addRows(rows)



#-----------------------------------------------------
# 현재 블록 및 다음 블록 생성
#-----------------------------------------------------
def setCurrentBlock(Block=None):
	global CurBlock

	if Block is not None:
		CurBlock = Block
	else:
		CurBlock = 	randomBlock()

def setNextBlock():
	global NextBlock

	NextBlock = randomBlock()

#-----------------------------------------------------
# 게임 화면 드로잉
#-----------------------------------------------------
def drawBackGround():
	Screen.fill((0,0,0))
	Screen.blit(Gameboard, (1, 1))
	Screen.blit(Nextboard, (375, 15))

def drawBlock(pBlock):
	block = pBlock['blockType']['blocks'][pBlock['dir']]
	x = pBlock['x']
	y = pBlock['y']
	color = pBlock['blockType']['color']

	baseX = 0
	baseY = 0
	if (pBlock == NextBlock):
		baseX = 375
		baseY = 15

	row = 0
	col = 0
	bit = 0x8000
	while bit > 0:
		if block & bit > 0:
			if pBlock == NextBlock:
				pygame.draw.rect(Screen, color, [(col * NEXT_SIZE) + baseX , (row * NEXT_SIZE) + baseY, NEXT_SIZE, NEXT_SIZE])
			else:
				pygame.draw.rect(Screen, color, [((x + col) * BLOCK_SIZE) + baseX , ((y + row) * BLOCK_SIZE) + baseY, BLOCK_SIZE, BLOCK_SIZE])

		col += 1
		if col == 4:
			col = 0
			row += 1

		bit = bit >> 1

def drawGameBoard():
	y = 0
	while y < BOARD_HEIGHT:
		x = 0
		while x < BOARD_WIDTH:
			type = Board[y][x]
			if (type is not None):
				color = type['color']
				pygame.draw.rect(Screen, color, [x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE])
			x += 1
		y += 1

def drawGameScreen():
	drawBackGround()
	drawGameBoard()
	drawBlock(CurBlock)
	drawBlock(NextBlock)
	pygame.display.update()

#-----------------------------------------------------
# Main Logic
#-----------------------------------------------------
pygame.init()
pygame.display.flip()

setCurrentBlock()
setNextBlock()

Running = True
last = Clock.get_ticks()

while Running:
	TickTime += (Clock.get_ticks() - last)
	last = Clock.get_ticks()

	while (TickTime - Tick) > 0:
		drop()
		TickTime -= Tick

	for event in pygame.event.get():
		if event.type == pygame.KEYDOWN:
			if event.key == pygame.K_ESCAPE:
				Running = False
			elif event.key == pygame.K_LEFT:
				move(LEFT)
			elif event.key == pygame.K_RIGHT:
				move(RIGHT)
			elif event.key == pygame.K_UP:
				rotate()
			elif event.key == pygame.K_DOWN:
				drop()

	drawGameScreen()
