import * as React from 'react';
import {Link} from 'react-router';
import * as ReactRedux from 'react-redux';
import * as reducers from '../reducers';
import * as detailActionCreators from '../actions/detailActionCreators';
import Person from '../models/Person';
import assign = require('object-assign');

interface DetailPageProps extends ReactRouter.RouteComponentProps<{}, {id: number}> {
    dispatch?: Redux.Dispatch,
    detail: Person
}

class DetailPage extends React.Component<DetailPageProps, {}> {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(detailActionCreators.select(this.props.routeParams.id));
    }

    render() {
        return (
            <div>
                <h3>編集</h3>
                <hr />
                <div>
                    <Link to='/master'>戻る</Link>
                </div>
                <div>
                    <form>
                        <div>
                            <label htmlFor='name'>名前</label>
                            <input id='name' type='text' value={this.props.detail.name ? this.props.detail.name : ''} />
                        </div>
                        <div>
                            <label htmlFor='age'>年齢</label>
                            <input id='age' type='text' value={this.props.detail.age ? this.props.detail.age.toString() : ''} />
                        </div>
                        <input type='submit' value='保存' />
                    </form>
                </div>
            </div>
        );
    }
}

function select(state: reducers.AppState): DetailPageProps {
    return {
        detail: assign({}, state.detail) as Person
    };
}

export default ReactRedux.connect(select)(DetailPage);
