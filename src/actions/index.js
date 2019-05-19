export const selectUser = (user) => {
    console.log("clicked user: " + user.first);
    return {
        type: "USER_SELECTED"
        , payload: user
    };
};

export const selectNote = (note) => {
    console.log("note title: " + note.title);

    return {
        type: "NOTE_SELECTED"
        , payload: note
    };
}