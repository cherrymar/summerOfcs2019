// a reducer takes in two things:

// 1. the action (info about what happened)

// 2. copy of current state


function comments(state = [], action){ // have to set a default value 
    console.log(state, action);
    return state;
}

export default comments;