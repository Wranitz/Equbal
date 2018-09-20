import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import RegisterPage from '../RegisterPage/RegisterPage';

import history from '../_helpers/history';


class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            //clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return(
            <div className = "jumbotron">
                <div className = "container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                
                                
                                
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return{
        alert
    };
}

export default connect(mapStateToProps)(App);
