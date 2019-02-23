import React, { Component } from 'react';

class TagItem extends Component {
    render() {
        const {item, place_at, filterContent} = this.props;
        return(
            <span
                className={`tag ${item.checked ? 'checked' : 'unchecked'}`}
                onClick={place_at === "sidebar" ? (() => {filterContent(item.id)}) : undefined}
                >
                {item.name}
            </span>
        )
    }
}

export default TagItem;