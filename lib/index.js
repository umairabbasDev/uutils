"use strict";
// import moment from "moment";
// import { HOUR, MINUTE, REGION, TIME_OPTIONS } from "../config/constant";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uTime = exports.uString = exports.uLocalStorage = exports.RegEx = exports.openInNewTab = exports.copyToClipboard = exports.getLastOnlineStatus = exports.getTimeAgo = exports.dayNameToPrefix = exports.isIncluded = exports.getTotal = exports.showTime = exports.generateTimeStamp = exports.percentage = exports.extractTitleFirstWord = exports.titleCase = exports.convertMinIntoHoursAndMin = exports.changeTheMeridiem = exports.convert24To12 = exports.convertTime12to24 = exports.UTILS_TEST = exports.generateAlphabet = exports.reverseArry = exports.generateRandomString = exports.generateRandomIntegerInRange = exports.formateTheDate = exports.HOUR = exports.MINUTE = exports.TIME_OPTIONS = exports.REGION = void 0;
// ***************************************************************** time config(not default) *****************************************************************
exports.REGION = undefined; // it will get region of current location that's why it set to undefined , it can be hard code
// export const REGION = "en-US";
exports.TIME_OPTIONS = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    // second: "2-digit",
    // timeZone: 'Australia/Sydney',
    // timeZoneName: "short",
};
exports.MINUTE = 'min';
exports.HOUR = 'hr';
const UTILS_TEST = 'Util testing ';
exports.UTILS_TEST = UTILS_TEST;
const PAGE_PATHNAME = 'pageUrl';
// const utilsTest = (value: string): string => {
//   // console.log(`value => ${value} `);
//   return value;
// };
// const setPageLocation = (pageUrl: string) => {
//   if (!localStorage) {
//     return;
//   }
//   try {
//     localStorage.setItem(PAGE_PATHNAME, pageUrl);
//   } catch (error) {
//     console.error("PAGE LOCATION STORAGE SAVE ERROR", error);
//   }
// };
// const getPageLocation = (): string | undefined => {
//   if (!localStorage) {
//     return;
//   }
//   const lsValue: string | null = localStorage.getItem(PAGE_PATHNAME);
//   if (!lsValue) {
//     return;
//   }
//   try {
//     // const url: string = JSON.parse(lsValue);
//     // if (url) {
//     // console.log(lsValue);
//     return lsValue;
//     // }
//   } catch (error) {
//     console.error("PAGE LOCATION STORAGE SAVE ERROR", error);
//   }
// };
// const removePageLocation = () => {
//   if (!localStorage) {
//     return;
//   }
//   try {
//     localStorage.removeItem(PAGE_PATHNAME);
//   } catch (error) {
//     console.error("PAGE PATHNAME LOCAL STORAGE REMOVE ERROR", error);
//   }
// };
const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h === null || time12h === void 0 ? void 0 : time12h.split(' ');
    // console.log(time, modifier);
    let [hours, minutes] = time === null || time === void 0 ? void 0 : time.split(':');
    if (hours === '12') {
        hours = '00';
    }
    if (modifier === 'PM') {
        hours = (parseInt(hours, 10) + 12);
    }
    minutes = minutes;
    return `${hours}:${minutes}`;
};
exports.convertTime12to24 = convertTime12to24;
const convert24To12 = (time) => {
    //   return moment(time, "hh:mm").format("LT");
    return true;
};
exports.convert24To12 = convert24To12;
const formateTheDate = (date) => {
    //   return  moment(date).format("M-D-Y");
    return true;
};
exports.formateTheDate = formateTheDate;
const changeTheMeridiem = (time, newMeridiem) => {
    // const meridiems = ["AM", "PM"];
    const [timeString, meridiem] = time.split(' ');
    const timeRegex = /^(1[0-2]|0?\d):([0-5]\d)$/;
    if (!timeRegex.test(timeString)) {
        throw new Error(`Invalid time format "${time}". The function only accepts 12-hour time format.`);
    }
    return `${timeString} ${newMeridiem}`;
};
exports.changeTheMeridiem = changeTheMeridiem;
const convertMinIntoHoursAndMin = (time) => {
    const minutes = Number(time);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const hourString = hours > 0 ? `${hours}${exports.HOUR} ` : '';
    const minuteString = `${remainingMinutes}${exports.MINUTE}`;
    return `${hourString}${minuteString}`;
};
exports.convertMinIntoHoursAndMin = convertMinIntoHoursAndMin;
const titleCase = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => {
        return word.replace(word[0], word[0].toUpperCase());
    })
        .join(' ');
};
exports.titleCase = titleCase;
const dayNameToPrefix = (dayName) => {
    let prefix = '';
    const compStr = dayName.toLowerCase();
    switch (compStr) {
        case 'monday':
            prefix = 'M';
            break;
        case 'tuesday':
            prefix = 'T';
            break;
        case 'wednesday':
            prefix = 'W';
            break;
        case 'thursday':
            prefix = 'TR';
            break;
        case 'friday':
            prefix = 'F';
            break;
        case 'saturday':
            prefix = 'S';
            break;
        case 'sunday':
            prefix = 'SN';
            break;
        default:
            throw new Error(`Invalid input: ${dayName}`);
    }
    return prefix;
};
exports.dayNameToPrefix = dayNameToPrefix;
const extractTitleFirstWord = (str) => {
    var _a, _b, _c, _d, _e, _f;
    const data = str === null || str === void 0 ? void 0 : str.toLowerCase().split(' ');
    let word;
    if ((str === null || str === void 0 ? void 0 : str.split(' ').length) > 1) {
        // console.log(data.length - 1);
        word = `${(_b = (_a = data === null || data === void 0 ? void 0 : data[0]) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.toUpperCase()}${(_d = (_c = data[data.length - 1]) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.toUpperCase()}`;
    }
    else {
        word = (_f = (_e = data === null || data === void 0 ? void 0 : data[0]) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.toUpperCase();
    }
    return word;
};
exports.extractTitleFirstWord = extractTitleFirstWord;
// TODO: add sorting functions
const percentage = (total, percent) => {
    const temp = total.reduce((sum, record) => sum + record);
    return (temp / percent) * 100;
};
exports.percentage = percentage;
function reverseArray(array) {
    return array === null || array === void 0 ? void 0 : array.map((item, idx) => array[array.length - 1 - idx]);
}
exports.reverseArry = reverseArray;
const generateTimeStamp = () => Date.now();
exports.generateTimeStamp = generateTimeStamp;
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.generateRandomString = generateRandomString;
// console.log(makeid(5));
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.generateRandomIntegerInRange = generateRandomIntegerInRange;
function generateAlphabet() {
    return [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
}
exports.generateAlphabet = generateAlphabet;
function showTime(time) {
    return new Intl.DateTimeFormat(exports.REGION, exports.TIME_OPTIONS).format(time);
}
exports.showTime = showTime;
/**
 * Calculates the sum of elements in the given array based on a key or by index.
 *
 * @param {Array} Arr - An array of elements to be summed up.
 * @param {string|undefined} [key] - The key to access the value of an element in the array.
 *
 * @returns {number} - The sum of the elements in the array.
 */
function getTotal(Arr, key) {
    if (!key) {
        return Arr === null || Arr === void 0 ? void 0 : Arr.reduce((sum, item) => sum + item, 0);
    }
    else {
        return Arr === null || Arr === void 0 ? void 0 : Arr.reduce((sum, item) => {
            if (typeof item[key] === 'number') {
                return sum + item[key];
            }
            else if (!isNaN(parseInt(item[key], 3))) {
                return sum + parseInt(item[key], 3);
            }
            else {
                return sum;
            }
        }, 0);
    }
}
exports.getTotal = getTotal;
/**
 * Checks if at least one element in one array is included in another array.
 *
 * @param {Array} array1 - The first array to be compared.
 * @param {Array} array2 - The second array to be compared.
 *
 * @returns {boolean} - Returns `true` if at least one element from `array1` is included in `array2`, and `false` otherwise.
 */
function isIncluded(array1, array2) {
    return array1.some((element) => array2.includes(element));
}
exports.isIncluded = isIncluded;
function getTimeAgo(timestamp) {
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000); // Convert Firestore timestamp to Date object
    const now = new Date(); // Current time
    // console.log("timestamp ", timestamp.nanoseconds);
    const diff = now.getTime() - date.getTime(); // Difference in milliseconds
    const minute = 60 * 1000; // Number of milliseconds in a minute
    const hour = 60 * minute; // Number of milliseconds in an hour
    const day = 24 * hour; // Number of milliseconds in a day
    const week = 7 * day; // Number of milliseconds in a week
    const month = 30 * day; // Number of milliseconds in a month
    const year = 365 * day; // Number of milliseconds in a year
    if (diff < minute) {
        return 'just now';
    }
    else if (diff < hour) {
        const minutesAgo = Math.floor(diff / minute);
        return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
    }
    else if (diff < day) {
        const hoursAgo = Math.floor(diff / hour);
        return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
    }
    else if (diff < week) {
        const daysAgo = Math.floor(diff / day);
        return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
    }
    else if (diff < month) {
        const weeksAgo = Math.floor(diff / week);
        return `${weeksAgo} ${weeksAgo === 1 ? 'week' : 'weeks'} ago`;
    }
    else if (diff < year) {
        const monthsAgo = Math.floor(diff / month);
        return `${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`;
    }
    else {
        const yearsAgo = Math.floor(diff / year);
        return `${yearsAgo} ${yearsAgo === 1 ? 'year' : 'years'} ago`;
    }
}
exports.getTimeAgo = getTimeAgo;
function getLastOnlineStatus(modifiedAt) {
    const date = new Date(modifiedAt.date);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    // Calculate the number of hours since the user was last online
    const hoursAgo = Math.floor(diff / 1000 / 60 / 60);
    if (hoursAgo < 24) {
        // If the user was last online less than 24 hours ago, return the time they were last online
        return modifiedAt.time;
    }
    else {
        // If the user was last online more than 24 hours ago, return the date they were last online
        return date.toDateString();
    }
}
exports.getLastOnlineStatus = getLastOnlineStatus;
const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e);
    alert('Copied to clipboard');
};
exports.copyToClipboard = copyToClipboard;
function openInNewTab(url) {
    window.open(url, '_blank');
    window.focus();
}
exports.openInNewTab = openInNewTab;
const uString = {};
exports.uString = uString;
const uTime = {};
exports.uTime = uTime;
const RegEx = {
    phone: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
};
exports.RegEx = RegEx;
const uLocalStorage = {
    getItem: (key) => {
        if (!localStorage) {
            return;
        }
        try {
            const item = localStorage.getItem(key);
            if (item) {
                return JSON.parse(item);
            }
        }
        catch (error) {
            throw new Error(`LOCAL STORAGE GET ITEM ERROR ${error}`);
        }
    },
    setItem: (key, value) => {
        if (!localStorage) {
            return;
        }
        try {
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch (error) {
            throw new Error(`LOCAL STORAGE SET ITEM ERROR ${error}`);
        }
    },
    removeItem: (key) => {
        if (!localStorage) {
            return;
        }
        try {
            localStorage.removeItem(key);
        }
        catch (error) {
            throw new Error(`LOCAL STORAGE REMOVE ITEM ERROR ${error}`);
        }
    },
    clear: () => {
        if (!localStorage) {
            return;
        }
        try {
            localStorage.clear();
        }
        catch (error) {
            throw new Error(`LOCAL STORAGE CLEAR ERROR ${error}`);
        }
    },
};
exports.uLocalStorage = uLocalStorage;
