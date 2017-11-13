/**
 * Created by Sumit-Yadav on 12-10-2017.
 */
import React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    List,
    Responsive
} from 'semantic-ui-react'

import {Link} from 'react-router-dom'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <Container>

                    <Grid columns="equal" verticalAlign="middle" className="foobar" stackable>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as="h5" inverted>Sample footer @ 2017</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Footer;