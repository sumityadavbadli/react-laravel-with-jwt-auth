/**
 * Created by Sumit-Yadav on 16-10-2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
    Header,
    Grid,
    Segment
} from 'semantic-ui-react'

class PageHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Segment inverted className="page-header" textAlign="center" vertical>
                <Header as="h1">{this.props.heading}</Header>
            </Segment>
        );
    }
}

PageHeader.propTypes = {
    heading : PropTypes.string.isRequired
};
export default PageHeader;