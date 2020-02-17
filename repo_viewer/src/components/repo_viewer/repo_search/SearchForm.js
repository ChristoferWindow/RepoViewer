import Form from "../../navbar/NavBar";
import React from "react";
import {applyMiddleware as dispatch} from "redux";

class SearchForm extends React.Component {


    render(){
        /** TODO in future query API for available Version Control Services **/
        const versionControl = ["github", "gitlab"];
        const versionControlItems = versionControl.map((versionControlItem) =>
            <option>{versionControlItem}</option>
        );
        return (
            <Form onSubmit={e => {
                e.preventDefault()

                if (!input.value.trim()) {
                    return
                }

                dispatch(addFormSubmit(input.value))
                input.value = ''
            }}
            >
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control size="sm" as="select">
                        {versionControlItems}
                        <option>test</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        );
    }
}

export default SearchForm;
