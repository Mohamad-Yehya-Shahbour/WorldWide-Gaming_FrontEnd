import axios from "axios";

const baseUrl = "http://localhost:31058/api";



const BearerToken = localStorage.getItem("access_token");
const userId = localStorage.getItem("user_id");
const inputSearch = localStorage.getItem("inputSearch");


const formhead = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${BearerToken}`
    },
}

const head = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BearerToken}`
    },
}

const registerHead = {
    headers: {
        'Content-Type': 'application/json',
    },
}

const api = {

    register: (signupData) => 
    axios.post(`${baseUrl}/Users/register`, signupData, registerHead),

    login : (loginData) => 
    axios.post(`${baseUrl}/Users/login`, loginData, registerHead),

    friendsPosts: (data) =>
    axios.post(`${baseUrl}/Posts/friendsPosts?id=${userId}`, data ,head),

    getTopPosts: () =>
    axios.get(`${baseUrl}/Posts/getTopPosts`,head),

    getGroups: () =>
    axios.get(`${baseUrl}/Groups/getGroups?id=${userId}` ,head),

    joinGroup: (data) =>
    axios.post(`${baseUrl}/Groups/joinGroup`, data ,head),

    getGroupPosts: (groupId) =>
    axios.get(`${baseUrl}/Groups/getGroupPosts?id=${groupId}` ,head),

    addPostOnGroup: (data) =>
    axios.post(`${baseUrl}/Groups/addPostOnGroup`, data ,head),

    getEvents: () =>
    axios.get(`${baseUrl}/Events/getEvents`,head),

    userPosts: () =>
    axios.get(`${baseUrl}/Posts/userPosts?userId=${userId}` ,head),

    getUserGroupsById: () =>
    axios.get(`${baseUrl}/Groups/getUserGroupsById?userId=${userId}` ,head),

    getUserGroups: () =>
    axios.get(`${baseUrl}/Groups/getUserGroups?userId=${userId}` ,head),

    getUserEvents: () =>
    axios.get(`${baseUrl}/Events/getUserEvents?userId=${userId}` ,head),

    getUserEventsById: () =>
    axios.get(`${baseUrl}/Events/getUserEventsById?userId=${userId}` ,head),

    getUserFriends: () =>
    axios.get(`${baseUrl}/Users/getUserFriends?userId=${userId}` ,head),

    userProfile: () =>
    axios.get(`${baseUrl}/Users/userProfile?userId=${userId}` ,head),

    createEvent: (data) =>
    axios.post(`${baseUrl}/Events/createEvent`, data ,formhead),

    addPost: (data) =>
    axios.post(`${baseUrl}/Posts/addPost`, data ,formhead),

    getPostComments: (postId) =>
    axios.get(`${baseUrl}/Posts/getPostComments?postId=${postId}` ,head),

    addPostComment: (data) =>
    axios.post(`${baseUrl}/Posts/addPostComment`, data ,head),

    getAllusers: () =>
    axios.get(`${baseUrl}/Users/getAllusers?userId=${userId}` ,head),

    getUsersByName: () =>
    axios.get(`${baseUrl}/Users/getUsersByName?name=${inputSearch}&userId=${userId}` ,head),

    getNotif: () =>
    axios.get(`${baseUrl}/Events/getNotif?userId=${userId}` ,head),

    getFriendRequests: () =>
    axios.get(`${baseUrl}/Posts/getFriendRequests?userId=${userId}` ,head),

    acceptFriend: (data) =>
    axios.post(`${baseUrl}/Posts/acceptFriend`, data ,head),

    declineFriend: (data) =>
    axios.post(`${baseUrl}/Posts/declineFriend`, data ,head),

    addFriends: (data) =>
    axios.post(`${baseUrl}/Posts/addFriends`, data ,head),

    createGroup: (data) =>
    axios.post(`${baseUrl}/Groups/createGroup`, data ,formhead),

    joinEvent: (data) =>
    axios.post(`${baseUrl}/Events/joinEvent`, data ,head),

    getCountries: () =>
    axios.get(`${baseUrl}/Users/getCountries` ,head),

    joinGroup: (data) =>
    axios.post(`${baseUrl}/Groups/joinGroup`, data ,head),

    likePost: (data) =>
    axios.post(`${baseUrl}/Posts/likePost`, data ,head),



};

export default api;