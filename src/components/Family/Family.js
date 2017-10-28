import React from 'react';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

export class Family extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div>
                <div className="well col-md-8 col-md-offset-2" onClick={this.show.bind(this)}>{this.props.family.houseHead}</div>

                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                    <div>House Head: {this.props.family.houseHead}</div>
                    <div>Employment Status: {this.props.family.employment ? "Employed" : "Not Employed"}</div>
                    <div>Graduation Status: {this.props.family.employment ? "Graduated" : "Not Graduated"}</div>
                </Rodal>
            </div>
        )
    }
}
