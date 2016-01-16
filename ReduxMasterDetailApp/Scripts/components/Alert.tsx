import * as React from 'react';

interface AlertProps extends React.Props<{}> {
    message: string;
}

export default class Alert extends React.Component<AlertProps, {}> {
    componentWillReceiveProps(nextProps: AlertProps) {
        if (nextProps.message) {
            alert(nextProps.message);
        }
    }

    render() {
        return null;
    };
}

