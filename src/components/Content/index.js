import React, {useState} from 'react';
import { Container, Page, Text, Divider, Row, Select, SubText } from './styles';
import { Analizer } from '../Analizer';
import { PWRU } from '../PWRU';
import Footer from '../Footer';

function Content() {
    
    const [modo, setModo] = useState('normal');
    
    return (
        <Container>
            <Page>
                <Divider />
                <Text> # Você já sabe como usar isso né cara? Bem, Bons Rolls.</Text>
                <Row>
                   <SubText> # Modo: </SubText>
                   <Select onChange={(value) => setModo(value.currentTarget.value)}>
                        <option value={'normal'}>Normal</option>
                        <option value={'P.W.R.U.'}>P.W.R.U.</option>
                   </Select>
                </Row>
                {modo && modo === 'normal' && <Analizer />}
                {modo && modo === 'P.W.R.U.' && <PWRU />}
                <Divider color_dash="#989898" half_margin={true} />
                <Footer />
            </Page>
        </Container>
    );
}

export default Content;