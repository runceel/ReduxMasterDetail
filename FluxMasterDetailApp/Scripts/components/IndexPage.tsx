import * as React from 'react';
import authStore from '../stores/authStore';
import AuthActionCreators from '../actions/AuthActionCreators';

interface IndexPageProps extends React.Props<{}> {
}

interface IndexPageState {
}

export default class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
    
    private authStoreToken: { remove: Function }
    private userName: HTMLInputElement;
    private password: HTMLInputElement;

    constructor(props: IndexPageProps) {
        super(props);
        this.state = this.getStateFromStore();
    }

    private getStateFromStore(): IndexPageProps {
        return {
        };
    }

    private handleSignIn(e: React.SyntheticEvent) {
        e.preventDefault();
        AuthActionCreators.signIn(this.userName.value, this.password.value);
    }

    componentDidMount() {
        this.authStoreToken = authStore.addListener(() => {
            this.setState(this.getStateFromStore());
        });
    }

    componentWillUnmount() {
        this.authStoreToken.remove();
    }

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
