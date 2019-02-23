import React, { Component } from 'react';
import ContentPage from './ContentsPage.js';

class ContentsPageList extends Component {

    render() {        
        const {contentList, allTagList} = this.props;
        const page_list = contentList.map(
            (item, index) => (<ContentPage key={index} data={item} allTagList={allTagList} />)
        );

        return(
            <ul className="content-container">
                {page_list}
            </ul>
        )    
    }
}
export default ContentsPageList;