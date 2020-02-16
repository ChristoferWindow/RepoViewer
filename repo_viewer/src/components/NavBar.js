import React from 'react';
import Nav from 'react-bootstrap/Nav';

class TopNavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        TranslatorMaster
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Sith Translator</Nav.Link>
                </Nav.Item>
                <img src={icon} style={{width:"40px", height:"35px"}}/>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Alien Translator</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default TopNavBar;
