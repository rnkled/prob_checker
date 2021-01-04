import React from 'react';
import { Container, Line, Button } from './styles';
import Calculator from '../Calculator';

export class Analizer extends React.Component {

    constructor(props) {
        super(props);
        this.addCalc = this.addCalc.bind(this);
        this.removeCalc = this.removeCalc.bind(this);
        this.clearCalc = this.clearCalc.bind(this);
        this.getTotal = this.getTotal.bind(this);
        this.state = {
            calculators: 1,
            total: ''
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

    getTotal() {
        let elements = document.getElementsByClassName("hiddenData");
        if (elements.length > 0) {
            let total = 1;
            for (var i = 0; i < elements.length; i++) {
                total *= parseFloat(elements.item(i).textContent);
            }

            this.setState({
                total: `Total: ${(total * 100).toFixed(2)}%`
            })
            document.getElementById('total').textContent = `Total: ${(total * 100).toFixed(2)}%`;
            document.getElementById("analizer").addEventListener("click", this.clearTotal);
        }
    }
    clearTotal() {
        document.getElementById('total').textContent = 'R.Total';
    }

    render() {
        let calculatorsArray = [];
        for (let i = 1; i < this.state.calculators + 1; i++) {
            calculatorsArray.push(<Calculator key={i} index={i} parentUpdate={this.getTotal} />)
        }
        return (
            <Container id="analizer">
                <Line>
                    <Button onClick={this.addCalc}>Add</Button>
                    <Button onClick={this.clearCalc} a_color="red">Clear All</Button>
                </Line>
                {calculatorsArray}
                <Line line_top={true}>
                    <Button onClick={this.removeCalc}>Remove</Button>
                    <div>
                        <Button id="total" onClick={this.getTotal}>R.Total</Button>
                    </div>
                </Line>
            </Container>
        )
    }

}

export default Analizer;