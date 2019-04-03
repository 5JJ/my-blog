import React, { Component } from 'react';
import TagItem from './TagItem.js';

class ContentsPage extends Component {
    render() {
        // pages가 넘어옴.
        //console.log(this.props);
        const {id, contents, tags} = this.props.page;
        const allTagList = this.props.allTagList.filter(item => tags.includes(item.id)).map(
            (tag, index) => (<TagItem key={index} item={tag} />)
        )
        let selected_language_id, selected_content = {};
        this.props.allLanguageList.forEach(item => {
            if(item.checked){
                selected_language_id = item.id
                return
            }
        });
        contents.forEach(item => {
            if(item.language_id == selected_language_id){
                selected_content = item
                return
            }
        });

        return(
            <li className="content-page">
                <h3 className="title">{selected_content.title}</h3>
                <hr/>
                <p className="contents">{selected_content.content}</p>
                <div className="tag-list">{allTagList}</div>
            </li>
        )    
    }
}
export default ContentsPage;