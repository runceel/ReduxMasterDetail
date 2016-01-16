import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as authActionCreators from '../actions/authActionCreators';

interface IndexPageProps extends React.Props<{}> {
    dispatch?: Redux.Dispatch;
}

class IndexPage extends React.Component<IndexPageProps, {}> {
    private userName: HTMLInputElement;
    private password: HTMLInputElement;

    private handleSignIn(e: React.SyntheticEvent) {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(authActionCreators.signIn(this.userName.value, this.password.value));
    };

    render() {
        return (
            <form onSubmit={this.handleSignIn.bind(this)}>
                <div>
                    <label htmlFor='userName'>ユーザーID：</label>
                    <input id='userName' type='text' ref={x => this.userName = x} />
                </div>
                <div>
                    <label htmlFor='password'>パスワード：</label>
                    <input id='password' type='password' ref={x => this.password = x} />
                </div>
                <div>
                    <input type='submit' value='サインイン' />
                </div>
            </form>
        );
    }
}

export default ReactRedux.connect()(IndexPage);