import React, { Component } from 'react';

class TagList extends Component {
    id = 0;
    state = {
        //tags: []
    }
    render() {
        let tagClassName = "tag";
        const list = this.props.allTagList.map(
            item => (
                    <span 
                        key={item.id} 
                        className={`tag ${item.checked ? 'checked' : 'unchecked'}`} 
                        onClick={() => {this.props.filterContent(item.id)}}
                        >
                        {item.name}
                    </span>
                )
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