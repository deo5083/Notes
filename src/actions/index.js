export const selectUser = (user) => {
    console.log("clicked user: " + user.first);
    return {
        type: "USER_SELECTED"
        , payload: user
    };
};