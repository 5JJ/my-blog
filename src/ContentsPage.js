import React, { Component } from 'react';

class ContentsPage extends Component {
    static defaultProps = {
        id: 0,
        title: '제목',
        contents: "내용",
        tags: [],
        char_type: 'KR',
    }



    render() {
        let {title, contents, tags} = this.props.data;
        return(
            <li className="content-page">
                <h3 className="title">{title}</h3>
                <p className="contents">{contents}</p>
                <div>{tags}</div>
            </li>
        )    
    }
}
export default ContentsPage;