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
    language_list: [
        {
            id: 0,
            shortName: 'KR',
            fullName: 'Korean',
            checked: true,
        },
        {
            id: 1,
            shortName: 'EN',
            fullName: 'English',
            checked: false,
        },
        {
            id: 2,
            shortName: 'JP',
            fullName: 'Japanese',
            checked: false,
        },
    ],
    pages: [
        {
            "id":0,
            "contents":[
                {
                    language_id: 0,
                    title: "비비에이",
                    content: "비비씨씨",
                },
                {
                    language_id: 1,
                    title: "bbac",
                    content: "bbcc",
                },
                {
                    language_id: 2,
                    title: "11111",
                    content: "2222",
                },
            ],
            "tags":[0, 1]
        },
        
        {
            "id":1,
            "contents":[
                {
                    language_id: 0,
                    title: "비비에이",
                    content: "비비씨씨",
                },
                {
                    language_id: 1,
                    title: "bbaaa",
                    content: "bbcc",
                },
                {
                    language_id: 2,
                    title: "33",
                    content: "555",
                },
            ],
            "tags":[1, 2]
        },
        {
            "id":2,
            "contents":[
                {
                    language_id: 0,
                    title: "비비이",
                    content: "비씨",
                },
                {
                    language_id: 1,
                    title: "bbaaa",
                    content: "bbcc",
                },
                {
                    language_id: 2,
                    title: "666",
                    content: "777",
                },
            ],
            "tags":[3]
        },
        {
            "id":3,
            "title":"ddd",
            "contents":[
                {
                    language_id: 0,
                    title: "비비이",
                    content: "비씨",
                },
                {
                    language_id: 1,
                    title: "bbaaa",
                    content: "bbcc",
                },
                {
                    language_id: 2,
                    title: "2222",
                    content: "511",
                },
            ],
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
        case 'SELECT_LANGUAGE':
            return{
                ...state,
                language_list: state.language_list.map(
                    item => {
                        if(item.id == action.language_id){
                            item.checked = true;
                        }else{
                            item.checked = false;
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