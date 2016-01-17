import * as React from 'react';

interface MasterPageProps extends React.Props<{}> {
}

interface MasterPageState {
}

export default class MasterPage extends React.Component<MasterPageProps, MasterPageState> {
    render() {
        return (
            <h1>Hello world</h1>
        );
    }
}
