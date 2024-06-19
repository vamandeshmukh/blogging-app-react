// StorageService.js

console.log('StorageService');
const loadState = () => {
    console.log('loadState');
    const state = localStorage.getItem('userState');
    if (state === null) {
        return {
            loggedInUser: '',
            loginStatus: false
        };
    }
    return JSON.parse(state);
};

const saveState = (stateData) => {
    console.log('saveState', stateData);
    const state = JSON.stringify(stateData);
    localStorage.setItem('userState', state);
};

export { loadState, saveState };
