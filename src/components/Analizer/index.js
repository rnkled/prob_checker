import React from 'react';
import { Container, Line, Button } from './styles';
import Calculator from '../Calculator';

export class Analizer extends React.Component {

    constructor(props) {
        super(props);
        this.addCalc = this.addCalc.bind(this);
        this.removeCalc = this.removeCalc.bind(this);
        this.clearCalc = this.clearCalc.bind(this);
        this.state = {
            calculators: 1
        }
    }

    addCalc() {
        this.setState({ calculators: this.state.calculators + 1 });
    }

    removeCalc() {
        this.setState({ calculators: this.state.calculators - 1 });
    }

    clearCalc() {
        this.setState({ calculators: 1 });
    }

    render() {
        let calculatorsArray = [];
        for (let i = 0; i < this.state.calculators; i++) {
            calculatorsArray.push(<Calculator key={i + 1} index={i + 1} />)
        }
        return (
            <Container>
                <Line>
                    <Button onClick={this.addCalc}>Add</Button>
                    <Button onClick={this.clearCalc} a_color="red">Clear All</Button>
                </Line>
                {calculatorsArray}
                <Line line_top={true}>
                    <Button onClick={this.removeCalc}>Remove</Button>
                </Line>
            </Container>
        )
    }

}

export default Analizer;