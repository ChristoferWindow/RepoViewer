import React from 'react';
import Nav from 'react-bootstrap/Nav';
import styles from './NavBar.css';
import SearchForm from "../repoViewer/repoSearch/SearchForm";

class NavBar extends React.Component {

    render(){
        return (
            <Nav className={styles.topNav} variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        RepoViewer
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default NavBar;
