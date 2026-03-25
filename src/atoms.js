import {atom} from "recoil";

// saving previously selected language and theme to local storage
const localStorageEffect = key => ({setSelf, onSet}) => {
    try {
        const savedValue = localStorage.getItem(key);
        if (savedValue != null) {
            try {
                setSelf(JSON.parse(savedValue));
            } catch (e) {
                // If parsing fails, use the raw value
                setSelf(savedValue);
            }
        }
    } catch (e) {
        console.error('Error reading from localStorage:', e);
    }

    onSet(newValue => {
        try {
            if (newValue) {
                localStorage.setItem(key, JSON.stringify(newValue));
            }
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    });
};

export const language = atom({
    key: "language",
    default: "javascript",
    effects_UNSTABLE: [
        localStorageEffect('language'),
    ]
});

export const cmtheme = atom({
    key: "cmtheme",
    default: "monokai",
    effects_UNSTABLE: [
        localStorageEffect('cmtheme'),
    ]
});