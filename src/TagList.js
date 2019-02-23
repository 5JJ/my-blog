import React, { Component } from 'react';
import TagItem from './TagItem.js';

class TagList extends Component {
    render() {
        const list = this.props.allTagList.map(
            (item, index) => (<TagItem key={index} item={item} place_at={"sidebar"} index={index} filterContent={this.props.filterContent}/>)
        )

        return(
            <div>
                <h4>Tag List</h4>
                <div className="tag-list">{list}</div>
            </div>
        )
    }
}

export default TagList;