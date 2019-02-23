import React, { Component } from 'react';
import TagItem from './TagItem.js';

class ContentsPage extends Component {
    render() {
        const {id, title, contents, tags} = this.props.data;
        const allTagList = this.props.allTagList.filter(item => tags.includes(item.id)).map(
            (tag, index) => (<TagItem key={index} item={tag} />)
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