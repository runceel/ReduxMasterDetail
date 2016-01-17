import * as React from 'react';

interface PagerProps extends React.Props<{}> {
    pageSize: number;
    dataCount: number;
    onPageChange: (page: number) => void;
}

export default class Pager extends React.Component<PagerProps, {}> {
    private handleChange(e: React.SyntheticEvent) {
        var target = e.target as HTMLSelectElement;
        var selectedOption = target.options[target.selectedIndex] as HTMLOptionElement;
        this.props.onPageChange(parseInt(selectedOption.value));
    }

    render() {
        const { pageSize, dataCount } = this.props;
        if (!pageSize || !dataCount) {
            return <select></select>
        }

        var page = dataCount / pageSize;
        if (dataCount % pageSize !== 0) {
            page += 1;
        }
        var pages = new Array<number>(page);
        for (var i = 0; i < pages.length; i++) {
            pages[i] = i;
        }

        var options = pages.map(x => <option label={(x + 1) + 'ページ'} value={x.toString()} />);

        return (
            <select onChange={this.handleChange.bind(this)}>
                {options}
            </select>
        );
    }
}
