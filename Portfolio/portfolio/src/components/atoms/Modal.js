import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import yes from "../../images/resume.pdf"



export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render(heading, paragraph, imgUrl, projectLink ) {
        return (
            <div
                className="card"
                style={{
                    backgroundImage:
                    "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
                    imgUrl +
                    ")",
                }}
                >
                
                    <h1 className="header">{heading}</h1>
                    <p className="text">{paragraph}</p>
                    <section>
                        <input type="button" value="Open" onClick={() => this.openModal()} />
                        <Modal 
                            visible={this.state.visible}
                            width="80%"
                            height="80%"
                            effect="fadeInUp"
                            onClickAway={() => this.closeModal()}
                        >
                            <div id="pdfviewer">
                                <object data={yes} type="application/pdf" width="100%" height="100%" position="absolute" top="0" left="0" right="0" bottom="0">
                                    <embed src={yes} type="application/pdf" width="100%" height="100%"/>
                                </object>
                                <a className="close" href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                            </div>
                        </Modal>
                    </section>
                
            </div>
           
        );
    }
}