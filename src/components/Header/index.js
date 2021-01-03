import React from 'react';
import { TopMenu, Title } from "./styles";


const Header = (props) => {
    return (
        <div>
            <TopMenu>
                <Title><a href='/'>App do Maminha</a></Title>
            </TopMenu>
        </div>
    );
};
export default Header;