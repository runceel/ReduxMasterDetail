import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import * as masterActionCreators from '../actions/masterActionCreators';
import PagerDataTable from './PagerDataTable';
import Person from '../models/Person';
import * as reducers from '../reducers';

interface MasterPageProps extends React.Props<{}> {
    dispatch?: Redux.Dispatch;
    dataCount: number;
    datas: Person[];
}

const PAGE_SIZE = 10;

class MasterPage extends React.Component<MasterPageProps, {}> {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(masterActionCreators.loadPeople(0, PAGE_SIZE));
    }

    private handleRenderHeader() {
        return (
            <tr>
                <th>名前</th>
                <th>年齢</th>
            </tr>
        );
    }

    private handleRenderRow(row: Person) {
        return (
            <tr>
                <td>{row.name}</td>
                <td>{row.age}</td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <PagerDataTable 
                    dataCount={this.props.dataCount}
                    pageSize={PAGE_SIZE}
                    datas={this.props.datas}
                    renderHeader={this.handleRenderHeader.bind(this)}
                    renderRow={this.handleRenderRow.bind(this)}/>
            </div>
        );
    }
}

function select(state: reducers.AppState): MasterPageProps {
    return {
        dataCount: state.peopleMaster.totalCount,
        datas: state.peopleMaster.people
    };
}

export default ReactRedux.connect(select)(MasterPage);
