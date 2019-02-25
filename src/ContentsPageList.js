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
                {
                    page_list.length > 0 ? page_list : <li className="content-empty">해당하는 페이지가 존재하지 않습니다.</li>}
            </ul>
        )    
    }
}
export default ContentsPageList;