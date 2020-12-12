import Fade from "react-reveal/Fade"
import data from "../data"
import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            which: "none"
        }
    }
    // Set the state of modal and which modal it is supposed to show
    openModal(which) {
        this.setState({
            visible: true,
            which: which
        });
    }

    closeModal() {
        this.setState({
            visible: false,
        });
    }

    render() {
        return (

            <div className="section" id="design">
                <div className="container">
                    <div className="design-wrapper">
                        <Fade bottom>
                            <h1>Design 🎨</h1>
                        </Fade>
                        <br></br>
                        <div className="grid">
                            {/* Project 1 */}
                            <div
                                className="card"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to top, rgba(128,128,128, 0), rgba(0, 0, 0, 0.5)),url(" +
                                        data.projects[0].imageSrc +
                                        ")",
                                }}
                            >   <br></br>
                                <h1 className="header">{data.projects[0].title}</h1>
                                <p className="text">{data.projects[0].para}</p>
                                <br></br>
                                <section>
                                    <input type="button" value="Open" onClick={() => this.openModal('first')} />
                                    <Modal
                                        visible={this.state.visible && this.state.which === 'first'}
                                        width="80%"
                                        height="85%"
                                        effect="fadeInUp"
                                        onClickAway={() => this.closeModal()}
                                    >
                                        <div id="pdfviewer">
                                            <object data={data.projects[0].url} type="application/pdf" width="100%" height="100%" position="absolute" top="0" left="0" right="0" bottom="0">
                                                <embed src={data.projects[0].url} type="application/pdf" width="100%" height="100%" />
                                            </object>
                                            <button className="close" onClick={() => this.closeModal()} >Close</button>
                                        </div>
                                    </Modal>
                                </section>

                            </div>

                            {/* Project 2 */}
                            <div
                                className="card"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to top, rgba(128,128,128, 0), rgba(0, 0, 0, 0.5)),url(" +
                                        data.projects[1].imageSrc +
                                        ")",
                                }}
                            >   <br></br>
                                <h1 className="header">{data.projects[1].title}</h1>
                                <p className="text">{data.projects[1].para}</p>
                                <br></br>
                                <section>
                                    <input type="button" value="Open" onClick={() => this.openModal('second')} />
                                    <Modal
                                        visible={this.state.visible && this.state.which === 'second'}
                                        width="80%"
                                        height="85%"
                                        effect="fadeInUp"
                                        onClickAway={() => this.closeModal()}
                                    >
                                        <div id="pdfviewer">
                                            <object data={data.projects[1].url} type="application/pdf" width="100%" height="100%" position="absolute" top="0" left="0" right="0" bottom="0">
                                                <embed src={data.projects[1].url} type="application/pdf" width="100%" height="100%" />
                                            </object>
                                            <button className="close" onClick={() => this.closeModal()} >Close</button>
                                        </div>
                                    </Modal>
                                </section>
                            </div>

                            {/* Project 3 */}
                            <div
                                className="card"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to top, rgba(128,128,128, 0), rgba(0, 0, 0, 0.5)),url(" +
                                        data.projects[2].imageSrc +
                                        ")",
                                }}
                            >   <br></br>
                                <h1 className="header">{data.projects[2].title}</h1>
                                <p className="text">{data.projects[2].para}</p>
                                <br></br>
                                <section>
                                    <input type="button" value="Open" onClick={() => this.openModal('third')} />
                                    <Modal
                                        visible={this.state.visible && this.state.which === 'third'}
                                        width="80%"
                                        height="85%"
                                        effect="fadeInUp"
                                        onClickAway={() => this.closeModal()}
                                    >
                                        <div id="pdfviewer">
                                            <object data={data.projects[2].url} type="application/pdf" width="100%" height="100%" position="absolute" top="0" left="0" right="0" bottom="0">
                                                <embed src={data.projects[2].url} type="application/pdf" width="100%" height="100%" />
                                            </object>
                                            <button className="close" onClick={() => this.closeModal()} >Close</button>
                                        </div>
                                    </Modal>
                                </section>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}