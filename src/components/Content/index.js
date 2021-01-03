import React from 'react';
import { Container, Page, Text, Divider } from './styles';
import { Analizer } from '../Analizer';
import Footer from '../Footer';

function Content() {
    return (

        <Container>
            <Page>
                <Divider />
                <Text> # Você já sabe como usar isso né cara? Bem, Boas Roladas.</Text>
                <Analizer />
                <Divider color_dash="#989898" half_margin={true} />
                <Footer />
            </Page>
        </Container>
    );
}

export default Content;