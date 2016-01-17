import * as React from 'react';
import Pager from './Pager';

interface PagerDataTableProps extends React.Props<{}> {
    pageSize: number;
    dataCount: number;
    datas: any[]
    renderRow: (row: any) => JSX.Element;
    renderHeader: () => JSX.Element;
    onPageChange: (page: number) => void;
}

interface PagerDataTableState {
    page?: number;
}

export default class PagerDataTable extends React.Component<PagerDataTableProps, PagerDataTableState> {
    constructor(props: PagerDataTableProps) {
        super(props);
        this.state = { page: 0 };
    }

    private handlePageChange(page: number) {
        this.props.onPageChange(page);
    }

    render() {
        var header = this.props.renderHeader();
        var rows = this.props.datas ? this.props.datas.map(this.props.renderRow) : null;
        return (
            <div>
                <table>
                    <thead>
                        {header}
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <Pager pageSize={this.props.pageSize} dataCount={this.props.dataCount} onPageChange={this.handlePageChange.bind(this)}/>
            </div>
        );
    }
}
