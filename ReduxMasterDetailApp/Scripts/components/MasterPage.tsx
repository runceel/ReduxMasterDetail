import * as React from 'react';
import * as ReactRedux from 'react-redux';

interface MasterPageProps extends React.Props<{}> {
}

class MasterPage extends React.Component<MasterPageProps, {}> {
    render() {
        return (
            <h3>Master page</h3>
        );
    }
}

export default ReactRedux.connect()(MasterPage);
