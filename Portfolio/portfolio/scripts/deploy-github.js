const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/jaep3347/jaep3347.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)