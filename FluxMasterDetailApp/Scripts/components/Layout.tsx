import * as React from 'react';
import Auth from '../models/Auth';
import authStore from '../stores/authStore';

interface LayoutState {
    userName?: string;
}

export default class Layout extends React.Component<React.Props<{}>, LayoutState> {
    private authStoreToken: { remove: Function };

    constructor(props: React.Props<{}>) {
        super(props);
        this.state = this.getStateFromStore();
    }

    private getStateFromStore(): LayoutState {
        return {
            userName: authStore.getState().userName
        };
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
            <div>
                <h1 style={{display: 'inline-block'}}>Flux master detail application sample</h1>
                {
                    this.state.userName ? 
                        <div style={{ display: 'inline-block' }}>
                            <span>|</span>
                            <span>ユーザー名：{this.state.userName}</span>
                        </div> :
                        null
                }
                <hr />
                {this.props.children}
            </div>
        );
    }
}
