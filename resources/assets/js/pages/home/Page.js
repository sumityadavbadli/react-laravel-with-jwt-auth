import React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Responsive,
    Segment,
    Step
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import AuthService from '../../services'

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const social = this.props.match.params.social
        const params = this.props.location.search;

        setTimeout(function() { 

        if (params && social) {
            this.props.dispatch(AuthService.socialLogin({ params, social }))
                .catch(({error, statusCode}) => {
                const responseError = {
                    isError: true,
                    code: statusCode,
                    text: error
                };
                this.setState({responseError});
                this.setState({
                    isLoading: false
                });
            })
        }

        }.bind(this), 1000);
    }

    render() {
        return (
            <div>
                <Segment
                    inverted
                    textAlign='center'
                    className='home-header'
                    vertical
                >
                    <Container text>
                        <Responsive minWidth={769}>
                            <Header
                                as="h2"
                                content="Something Cool"
                                inverted
                                className="pretitle"
                            />
                        </Responsive>
                        <Header
                            as='h1'
                            content='Tagline Here'
                            inverted
                            className="main-heading"
                        />
                        <Header
                            as='p'
                            content='sub heading'
                            inverted
                            className="sub-heading"
                        />
                        <Button color="teal" size='huge' className="free-signup-button">
                            <Link to='/register' replace>Register</Link>
                        </Button>
                    </Container>
                </Segment>
                <div className="course-tour">
                    <Container textAlign="center" style={{padding: '2em 0em'}}>
                        <Header as="h3" content="About your company"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </Container>
                    <Container className="step-container">
                        <Responsive minWidth={992}>
                            <Grid columns={1} padded="horizontally">
                                <Grid.Row>
                                    <Grid.Column>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae
                                            ducimus eius eos fugit ipsam, nemo rem repellendus suscipit unde? Aliquam
                                            aliquid consequatur consequuntur deleniti nisi quos, ratione repudiandae
                                            sint!
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta dolores
                                            dolorum eligendi, esse, facilis fugit hic impedit ipsam libero nisi
                                            obcaecati pariatur placeat soluta voluptatum. Aliquid officia quod
                                            veritatis!</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta dolores
                                            dolorum eligendi, esse, facilis fugit hic impedit ipsam libero nisi
                                            obcaecati pariatur placeat soluta voluptatum. Aliquid officia quod
                                            veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                                            dicta dolores
                                            dolorum eligendi, esse, facilis fugit hic impedit ipsam libero nisi
                                            obcaecati pariatur placeat soluta voluptatum. Aliquid officia quod
                                            veritatis!</p>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta dolores
                                            dolorum eligendi, esse, facilis fugit hic impedit ipsam libero nisi
                                            obcaecati pariatur placeat soluta voluptatum. Aliquid officia quod
                                            veritatis!</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Responsive>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Page;