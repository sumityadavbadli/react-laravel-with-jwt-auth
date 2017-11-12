import React from 'react'
import * as Action from '../../store/actions'
import AuthService from '../../services'


class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            credentials : {
                email: 'sumityadavadli@gmail.com',
                password: 'coolsecret'
            }
        }
    }

    componentDidMount(){

        this.props.dispatch(AuthService.login(this.state.credentials))
            .catch((error) => {
                console.log("Ooops something went weong");
            })
    }

    render() {
        return(
            <h1>On Login page</h1>
        );
    }
}

export default Page;