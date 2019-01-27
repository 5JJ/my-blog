import React, { Component } from 'react';
import ContentPage from './ContentsPage.js';
import * as data from './content_files/test.json';

class ContentsPageList extends Component {
    state = {
        list: []
    }
    componentDidMount(){
        const {list} = this.state;
        let data_default;
        
        if(Array.isArray(data.default)){
            data_default = data.default;
        }else{
            data_default = {...data.default};
        }

        this.setState({
            list: list.concat(data_default)
        });
    }

    render() {
        const {list} = this.state;
        const page_list = list.map(
            item => (<ContentPage key={item.id} data={item}/>)
        );

        return(
            <div className="content-container">
                {page_list}
            </div>
        )    
    }
}
export default ContentsPageList;