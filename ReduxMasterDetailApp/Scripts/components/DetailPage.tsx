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
    private name: HTMLInputElement;
    private age: HTMLInputElement;

    private handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        const { dispatch } = this.props;
        var p = new Person();
        p.id = this.props.detail.id;
        p.name = this.name.value;
        p.age = parseInt(this.age.value);
        dispatch(detailActionCreators.update(p));
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(detailActionCreators.select(this.props.routeParams.id));
    }

    componentWillReceiveProps(nextProps: DetailPageProps) {
        if (this.props.detail !== nextProps.detail) {
            const { name, age } = nextProps.detail;
            this.name.value = name;
            this.age.value = age ? age.toString() : '';
        }
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
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div>
                            <label htmlFor='name'>名前</label>
                            <input id='name' type='text' ref={node => this.name = node} />
                        </div>
                        <div>
                            <label htmlFor='age'>年齢</label>
                            <input id='age' type='text' ref={node => this.age = node}/>
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
        detail: state.detail
    };
}

export default ReactRedux.connect(select)(DetailPage);
