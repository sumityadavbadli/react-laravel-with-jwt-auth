/**
 * Created by Sumit-Yadav on 06-10-2017.
 */
import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Button,
    Container,
    Dropdown,
    Divider,
    Image,
    Menu,
    Responsive,
    Segment
} from 'semantic-ui-react';
import * as actions from '../../store/actions'


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        event.preventDefault();
        this.props.dispatch(actions.authLogout());
    }


    render() {
        this.avatar = (
            <span>
                 <Image avatar src={require('../../../images/avatar/boy.png')}
                        verticalAlign='top'/> {this.props.userName}
            </span>
        );
        return (
            <div>
                <Responsive as={Segment} inverted maxWidth={768} className="mobile-navbar">
                    <Menu size="large" inverted secondary>
                        <Menu.Item as={Link} to="/" className="logo" replace>
                            <img
                                src={require('../../../images/theme/infotiq-logo.png')} alt="infoTiq"/>
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Dropdown icon="bars" className="collapsible-menu">
                                    <Dropdown.Menu className='bounceIn animated'>
                                        {this.props.isAuthenticated
                                            ?
                                            <Dropdown.Item onClick={this.handleLogout} text="logout" icon='sign out'
                                                           key='logout'/>
                                            :
                                            <div>
                                                <Dropdown.Item as={NavLink} to="/login" text="login"/>
                                                <Divider/>
                                                <Dropdown.Item as={NavLink} to="/register" text="register"/>
                                            </div>
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Responsive>
                <Responsive as={Segment} inverted style={{marginBottom: '0', borderRadius: '0', padding: '1em 0em'}}
                            className="navbar" minWidth={769}>
                    <Menu inverted pointing secondary size='large'>
                        <Container>
                            <Menu.Item as={Link} to="/" className="logo" replace><img
                                src={require('../../../images/theme/infotiq-logo.png')} alt="infoTiq"/></Menu.Item>
                            <Menu.Item as={NavLink} to="/dashboard">Dashboard</Menu.Item>
                            <Menu.Menu position='right'>
                                {this.props.isAuthenticated
                                    ? <Dropdown trigger={this.avatar} pointing='top right' className='user-dropdown'>
                                        <Dropdown.Menu className='bounceIn animated'>
                                            <Dropdown.Item
                                                text={"Signed in as " + this.props.userName}
                                                disabled key='user'/>
                                            <Dropdown.Item onClick={this.handleLogout} text="logout" icon='sign out'
                                                           key='logout'/>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    : <Button.Group>
                                        <Button as={Link} to="/login" replace positive compact
                                                style={{lineHeight: '2em'}}>Login</Button>
                                        <Button.Or/>
                                        <Button as={Link} to="/register" replace color='blue' compact
                                                style={{lineHeight: '2em'}}>Register</Button>
                                    </Button.Group>
                                }
                            </Menu.Menu>
                        </Container>
                    </Menu>
                </Responsive>
            </div>
        );
    }
}

Page.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default Page;