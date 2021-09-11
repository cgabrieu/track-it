import axios from "axios";

const API_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

const getConfig = (token) => ({
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

const postLogin = (email, password) => (
    axios.post(API_URL+"auth/login", {
        email: email,
        password: password,
    })
);

const postRegister = (email, name, image, password) => (
    axios.post(API_URL+"auth/sign-up", {
        email: email,
        name: name,
        image: image,
        password: password,
    })
);

const postMakeHabit = (habitName, listDays, token) => (
    axios.post(API_URL+"habits", {
        name: habitName,
        days: listDays,
    }, getConfig(token))
);

const getListHabits = (token) => (
    axios.get(API_URL+"habits", getConfig(token))
);

const deleteHabit = (IDHabit, token) => (
    axios.delete(API_URL+"habits/"+IDHabit, getConfig(token))
);

const getTodayHabits = (token) => (
    axios.get(API_URL+"habits/today", getConfig(token))
);

const postCheckHabit = (IDHabit, token) => (
    axios.post(API_URL+"habits/"+IDHabit+"/check", getConfig(token))
);

const postUncheckHabit = (IDHabit, token) => (
    axios.post(API_URL+"habits/"+IDHabit+"/uncheck", getConfig(token))
);

const getHistoryDailyHabit = (token) => (
    axios.get(API_URL+"habits/history/daily", getConfig(token))
);

export {
    postRegister,
    postLogin,
    postMakeHabit,
    getListHabits,
    deleteHabit,
    getTodayHabits,
    postCheckHabit,
    postUncheckHabit,
    getHistoryDailyHabit,
};