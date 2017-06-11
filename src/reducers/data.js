const initialState =
    [
        { text: "Бла бла", completed: false },
        { text: "Бла бла", completed: true },
    ];

export default function configReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    completed: false,
                    text: action.text,
                },
            ];
        case "COMPLETE_TODO":
            return state.map((todo, index) =>
                index === action.id ?
                    {
                        ...todo,
                        completed: !todo.completed,
                    } :
                    todo
            )
        case "REMOVE_TODO":
            return state.filter((todo, index) =>
                index !== action.id
            )
        default:
            return state;
    }
}