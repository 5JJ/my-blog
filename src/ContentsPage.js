import React, { Component } from 'react';

class ContentsPage extends Component {
    render() {
        const {id, title, contents, tags} = this.props.data;
        const allTagList = this.props.allTagList.filter(item => tags.includes(item.id)).map(
            (tag, index) => (<span key={index} className="tag">{tag.name}</span>)
        )

        return(
            <li className="content-page">
                <h3 className="title">{title}</h3>
                <p className="contents">{contents}</p>
                <div className="tag-list">{allTagList}</div>
            </li>
        )    
    }
}
export default ContentsPage;