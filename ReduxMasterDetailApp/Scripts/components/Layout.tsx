import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as reducers from '../reducers';
import Alert from './Alert';

interface LayoutProps extends React.Props<{}> {
    userName: string;
    message: string;
}

class Layout extends React.Component<LayoutProps, {}> {
    render() {
        return (
            <div>
                <Alert message={this.props.message} />
                <h1 style={{display: 'inline-block'}}>Redux master detail application sample</h1>
                {this.props.userName ? <span>ユーザー名：{this.props.userName}</span> : null}
                <hr />
                {this.props.children}
            </div>
        );
    }
}

function select(state: reducers.AppState): LayoutProps {
    return {
        userName: state.auth.userName,
        message: state.alert.message
    };
}

export default ReactRedux.connect(select)(Layout);

