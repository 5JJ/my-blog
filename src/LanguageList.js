import React, { Component } from 'react';

class LanguageList extends Component {
    
    createList = (language_list) => {
        let list = []
        for(let i = 0; i < language_list.length; i ++){
            let language_list_item = language_list[i]
            list.push(
                <div className='language-input-list'>
                    <input id={language_list_item.fullName} type="radio" name='language_type' key={language_list_item.id} onClick={(()=>{this.props.selectLanguage(language_list_item.id)})}/>
                    <label for={language_list_item.fullName}>{language_list_item.shortName}</label>
                </div>
            )
        }
        return list;
    }

    render() {
        const {allLanguageList} = this.props;
        return(
            <div>
                {this.createList(allLanguageList)}
            </div>
        )
    }
}

export default LanguageList;