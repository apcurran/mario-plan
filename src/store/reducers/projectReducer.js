const initState = {
    projects: [
        { id: 1, title: "Help me Find Peach", content: "Lorem ipsum" },
        { id: 2, title: "Collect all the Stars", content: "Lorem ipsum" },
        { id: 3, title: "Egg Hunt With Yoshi", content: "Lorem ipsum" },
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("Created project", action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("Create project error", action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;