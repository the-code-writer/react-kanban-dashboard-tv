import React from 'react';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';

class CardColumnHeaders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: {
                t1: "Not Started.",
                t2: "In Progress.",
                t3: "Completed.",
                t4: "Delivered.",
            }
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    tick() {

        //console.warn(":::: >>>>>> TICK 2 <<<<<< ::::", this.props.titles, this.state);

        if (typeof this.props.titles !== "undefined") {

            this.setState({
                titles: this.props.titles
            });

        }

    }


    render() {

        return (
            <div className="row kanban-button-container mb-3">
                <div className="col-3 col-md-3  color-1x">
                    <img src="https://communicator.hyperefficient2.net/assets/display/m1.png"
                         className="beveled-milestone-title-image" alt=""/>
                </div>
                <div className="col-3 col-md-3  color-2x">
                    <img src="https://communicator.hyperefficient2.net/assets/display/m2.png"
                         className="beveled-milestone-title-image" alt=""/>
                </div>
                <div className="col-3 col-md-3  color-3x">
                    <img src="https://communicator.hyperefficient2.net/assets/display/m3.png"
                         className="beveled-milestone-title-image" alt=""/>
                </div>
                <div className="col-3 col-md-3  color-4x">
                    <img src="https://communicator.hyperefficient2.net/assets/display/m4.png"
                         className="beveled-milestone-title-image" alt=""/>
                </div>
            </div>
        );

    }

}

export default CardColumnHeaders;
