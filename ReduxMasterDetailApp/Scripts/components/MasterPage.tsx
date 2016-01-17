import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import * as masterActionCreators from '../actions/masterActionCreators';
import PagerDataTable from './PagerDataTable';
import Person from '../models/Person';
import * as reducers from '../reducers';
import history from '../history';

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
                <th></th>
            </tr>
        );
    }

    private handleEditClick(id: number) {
        history.push('/detail/' + id);
    }

    private handleRenderRow(row: Person) {
        return (
            <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>
                    <a href='#' onClick={e => {
                        e.preventDefault();
                        this.handleEditClick(row.id);
                    }}>編集</a>
                </td>
            </tr>
        );
    }

    private handlePageChange(page: number) {
        const { dispatch } = this.props;
        dispatch(masterActionCreators.loadPeople(page * PAGE_SIZE, PAGE_SIZE));
    }

    render() {
        return (
            <div>
                <PagerDataTable 
                    dataCount={this.props.dataCount}
                    pageSize={PAGE_SIZE}
                    datas={this.props.datas}
                    renderHeader={this.handleRenderHeader.bind(this)}
                    renderRow={this.handleRenderRow.bind(this)}
                    onPageChange={this.handlePageChange.bind(this)}/>
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
