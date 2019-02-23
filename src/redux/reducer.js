//import * as data from 'content_files/test.json';

const initialState = {
    title: 'helloWorld',
    count: 0,
};

const initContentData = {
    tag_list: [
        {
            id: 0,
            name: "aaaaaaa",
            checked: true,
        },
        {
            id: 1,
            name: "bb",
            checked: true,   
        },
        {
            id: 2,
            name: "abbba",
            checked: true, 
        },
        {
            id: 3,
            name: "cc",
            checked: true,
        }
    ],
    pages: [
        {
            "id":0,
            "title":"ccc",
            "contents":"bb",
            "tags":[0, 1]
        },
        {
            "id":1,
            "title":"bbb",
            "contents":"cc",
            "tags":[1, 2]
        },
        {
            "id":2,
            "title":"ccc",
            "contents":"cc",
            "tags":[3]
        },
        {
            "id":3,
            "title":"ddd",
            "contents":"cc",
            "tags":[2]
        }
    ]
}


const reducer = (state = initContentData, action) => {
    switch(action.type){
        case 'FILTER_CONTENT':
            return{
                ...state,
                tag_list: state.tag_list.map(
                    item => {
                        if(item.id == action.tag_id){
                            item.checked = !item.checked;
                        }
                        return item;
                    }
                )
            }
    }
    //console.log(state.tag_list);
    return state;
}

export default reducer;