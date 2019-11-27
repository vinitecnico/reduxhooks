import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [
        'React Native',
        'ReactJS'
    ]
};

function courses(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'ADD_COURSE':
            const qty = state.data.filter(x=> x.indexOf(action.title) >= 0).length
            if(qty > 0) {
                action.title = `${action.title}-${qty}`;
            }
            return { ...state, data: [...state.data, action.title]};
        default:
            return state;
    }
}


const store = createStore(courses);

export default store;