import React from 'react';
import { Container, Field, Line, Column, Title, ResultContainer, RollButton, Infos } from './styles';
import Random from 'random';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.raw = 0;
        this.result = 0;
        this.sucess = 0;
        this.failures = 0;
        this.data = {
            quantidade: 10000,
            dados_rolagem: null,
            numero_alvo: null,
            validos: null,
            dado: 4,
            check: false
        };
        this.state = {
            result: this.result,
            sucess: this.sucess,
            failures: this.failures
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.calculate = this.calculate.bind(this);
        this.setResult = this.setResult.bind(this);
        this.showResult = this.showResult.bind(this);
        this.parentUpdate = props.parentUpdate;
    }

    handleChange(event) {
        let name = event.target.attributes.name.value;
        let value = event.target.value;
        if (name === 'dado') {
            value = value.split('d')[1];
        }
        this.data[name] = parseInt(value);
    }

    handleCheck(event) {
        let name = event.target.attributes.name.value;
        let value = event.target.checked;
        this.data[name] = value;
    }

    calculate() {

        this.sucess = 0;
        this.failures = 0;
        this.result = 0;

        for (let i = 0; i < this.data.quantidade; i++) {
            let rolls = [];
            for (let c = 0; c < this.data.dados_rolagem; c++) {
                let number = Random.int(1, this.data.dado);
                rolls.push(number);
            }

            let amount = 0;
            rolls.forEach(number => {
                if (this.data.check) {
                    if (number >= this.data.numero_alvo) {
                        amount += 1;
                    }
                } else {
                    if (number === this.data.numero_alvo) {
                        amount += 1;
                    }
                }
            }
            )
            if (amount >= this.data.validos) {
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

    render() {
        return (
            <Container ref={this.Ref}>
                <Title>
                    # Análise {this.props.index}
                </Title>
                <Line>
                    <Column>
                        <Line>
                            <Field>
                                <label>Tipo de Dado</label>
                                <select name="dado" onChange={this.handleChange}>
                                    <option>d4</option>
                                    <option>d6</option>
                                    <option>d8</option>
                                    <option>d10</option>
                                    <option>d12</option>
                                    <option>d20</option>
                                    <option>d100</option>
                                </select>
                            </Field>
                            <Field>
                                <label>Quantidade de Rolagens:</label>
                                <input type="number" name="quantidade" min="0" onChange={this.handleChange}></input>
                            </Field>
                            <Field>
                                <label>Dados por Rolagem:</label>
                                <input type="number" name="dados_rolagem" min="0" onChange={this.handleChange}></input>
                            </Field>
                        </Line>
                        <Line>
                            <Field>
                                <label>Numero Alvo:</label>
                                <input type="number" name="numero_alvo" min="0" onChange={this.handleChange}></input>
                            </Field>
                            <Field>
                                <label>Validos Necessarios:</label>
                                <input type="number" name="validos" min="0" onChange={this.handleChange}></input>
                            </Field>
                            <Field>
                                <label>Ativar "acima de" alvo:</label>
                                <input type="checkbox" className="check" name="check" onClick={this.handleCheck}></input>
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