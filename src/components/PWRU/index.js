import React from 'react';
import { Container, Line, Button } from './styles';
import Calculator from '../PWRUCalculator';

export class PWRU extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calculators: 1,
        }
    }

    render() {
        return (
            <Container id="PWRU">
                <Calculator/>
            </Container>
        )
    }

}

export default PWRU;