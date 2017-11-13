// import libs
import {connect} from 'react-redux'

// import component
import Page from './Page'

const mapStateToProps = state => {
    return {
        isAuthenticated : state.Auth.isAuthenticated,
        userName : state.Auth.user.name,
    }
};

export default connect(mapStateToProps)(Page)