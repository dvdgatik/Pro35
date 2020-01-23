import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import Stepper from './Stepper';

class Encuesta1 extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired
    };
    render() {
        const {children} = this.props;
        return(
            <div>
                <Stepper/>
            </div>

                );
    }
}

export default Encuesta1;