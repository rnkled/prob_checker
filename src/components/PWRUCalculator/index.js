import React from 'react';
import { Container, Field, Line, Column, Title, ResultContainer, RollButton, Infos } from './styles';
var Roll = require('roll'),
roll = new Roll();

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.data = {
            quantidade: 100000,
            numero_alvo: null,
            expressao: null
        };
        this.state = {
            result: this.result,
            sucess: this.sucess,
            failures: this.failures
        }
        this.calculate = this.calculate.bind(this);
        this.setResult = this.setResult.bind(this);
        this.showResult = this.showResult.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    calculate() {

        this.sucess = 0;
        this.failures = 0;
        this.result = 0;

        for (let i = 0; i < this.data.quantidade; i++) {

            let r;
            try {
                r = roll.roll(this.data.expressao);
            } catch (error) {
                console.log(error);
                alert(`Há algo de errado com a sua expressão!`)
                return
            }
            let arrayResult = r.rolled;
            let merged = [].concat(...arrayResult);
            let res = merged.sort((a,b) => a - b).slice(0, 2);

            if (parseInt(res[0] + res[1]) <= parseInt(this.data.numero_alvo)) {
                this.sucess += 1;
            } else {
                this.failures += 1;
            }
        }
        this.raw = (this.sucess / this.data.quantidade);
        this.result = (this.sucess / this.data.quantidade) * 100;
        return true;
    }


    showResult(validForm) {
        if (validForm) {
            this.stringResult = <div><h3>Resultado:</h3> <h1>{this.result.toFixed(2)}%</h1><p style={{ 'display': 'none' }} className="hiddenData">{this.raw}</p></div>;
            this.stringSucess = <p>Rolagens que Atingiram: {this.sucess}</p>;
            this.stringFailure = <p>Falhas: {this.failures}</p>;
            this.setState({
                result: this.result,
                sucess: this.sucess,
                failures: this.failures
            })
        }
    }

    setResult() {
        let validForm = true;
        Object.keys(this.data).forEach((key) => {
            if (validForm !== false) {
                if (this.data[key] === null || this.data[key] === 'select' || this.data[key] === '') {
                    validForm = false;
                    alert(`Erro! O Campo ${key} tá faltando.`)
                    return
                }
            }
        })

        var calculate = new Promise((resolve, reject) => {
            let bool = this.calculate();
            if (bool === true) {
                resolve('Done!');
            } else {
                reject('Error');
            }
        })

        calculate.then(this.showResult(validForm));
    }
    handleChange(event) {
        let name = event.target.attributes.name.value;
        let value = event.target.value;
        this.data[name] = value;
    }

    render() {
        return (
            <Container ref={this.Ref}>
                <Title>
                    # Análise {this.props.index}
                </Title>
                <Line>
                    <Column>
                        <Line>
                            <Field style={{width: '100%', justifyContent: 'flex-start'}}>
                                <label>Expressão:</label>
                                <input style={{width: '100%', maxWidth:'60vw'}} type="input" name="expressao" onChange={this.handleChange}></input>
                            </Field>
                        </Line>
                        <Line>
                            <Field>
                                <label>Numero Alvo:</label>
                                <input type="number" name="numero_alvo" min="0" onChange={this.handleChange}></input>
                            </Field>
                            <Field>
                                <label>Quantidade de Rolagens [Precisão]:</label>
                                <input type="number" name="quantidade" min="0" value={this.data.quantidade} onChange={this.handleChange}></input>
                            </Field>
                        </Line>
                    </Column>
                    <RollButton onClick={() => this.setResult()}>Roll</RollButton>
                    <ResultContainer>
                        {this.stringResult}
                    </ResultContainer>
                </Line>
                <Infos>
                    <Line>
                        <Field>{this.stringSucess}</Field>
                        <Field>{this.stringFailure}</Field>
                    </Line>
                </Infos>
            </Container >
        );
    }
}

export default Calculator;