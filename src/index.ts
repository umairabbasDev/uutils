// import moment from "moment";
// import { HOUR, MINUTE, REGION, TIME_OPTIONS } from "../config/constant";

// ***************************************************************** time config(not default) *****************************************************************

export const REGION = undefined; // it will get region of current location that's why it set to undefined , it can be hard code
// export const REGION = "en-US";

export const TIME_OPTIONS = {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,

  // second: "2-digit",
  // timeZone: 'Australia/Sydney',
  // timeZoneName: "short",
};
export const MINUTE = "min";
export const HOUR = "hr";

const UTILS_TEST = "Util testing ";
const PAGE_PATHNAME = "pageUrl";

const utilsTest = (value: String): String => {
  // console.log(`value => ${value} `);

  return value;
};

const convertTime12to24 = (time12h: any) => {
  const [time, modifier] = time12h?.split(" ");

  // console.log(time, modifier);

  let [hours, minutes] = time?.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = (parseInt(hours, 10) + 12) as any;
  }

  return `${hours}:${minutes}`;
};

const setPageLocation = (pageUrl: string) => {
  if (!localStorage) {
    return;
  }
  try {
    localStorage.setItem(PAGE_PATHNAME, pageUrl);
  } catch (error) {
    console.error("PAGE LOCATION STORAGE SAVE ERROR", error);
  }
};

const getPageLocation = (): string | undefined => {
  if (!localStorage) {
    return;
  }

  const lsValue: string | null = localStorage.getItem(PAGE_PATHNAME);
  if (!lsValue) {
    return;
  }

  try {
    // const url: string = JSON.parse(lsValue);
    // if (url) {
    // console.log(lsValue);

    return lsValue;
    // }
  } catch (error) {
    console.error("PAGE LOCATION STORAGE SAVE ERROR", error);
  }
};

const convert24To12 = (time: string) => {
  //   return moment(time, "hh:mm").format("LT");
  return true;
};

export const formateTheDate = (date: string) => {
  //   return  moment(date).format("M-D-Y");
  return true;
};

const removePageLocation = () => {
  if (!localStorage) {
    return;
  }

  try {
    localStorage.removeItem(PAGE_PATHNAME);
  } catch (error) {
    console.error("PAGE PATHNAME LOCAL STORAGE REMOVE ERROR", error);
  }
};

const changeTheMeridiem = (time: string, value: any) => {
  let tempTime = time.split(" ")[0];
  return `${tempTime} ${value}`;
};

const convertMinIntoHoursAndMin = (time: string): string => {
  const minutes = Number(time);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hourString = hours > 0 ? `${hours}${HOUR} ` : "";
  const minuteString = `${remainingMinutes}${MINUTE}`;

  return `${hourString}${minuteString}`;
};

const titleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};

const dayNameToPrefix = (dayName: string) => {
  if (dayName.includes("Monday")) return "M";
  if (dayName.includes("Tuesday")) return "T";
  if (dayName.includes("Wednesday")) return "W";
  if (dayName.includes("Thursday")) return "TR";
  if (dayName.includes("Friday")) return "F";
  if (dayName.includes("Saturday")) return "S";
  if (dayName.includes("Sunday")) return "SN";
};

const extractTitleFirstWord = (str: string): string => {
  let data = str?.toLowerCase().split(" ");
  let word;
  if (str?.split(" ").length > 1) {
    // console.log(data.length - 1);
    word = `${data?.[0]?.[0]?.toUpperCase()}${data[
      data.length - 1
    ]?.[0]?.toUpperCase()}`;
  } else {
    word = data?.[0]?.[0]?.toUpperCase();
  }
  return word;
};

// export const providerServiceSorting = (data) => {
//   let sorting = data.sort(
//     (a: { providerService: any }, b: { providerService: any }) => {
//       if (a?.providerService && b?.providerService) {
//         return b?.providerService.status - a?.providerService.status;
//       } else if (a?.providerService && !b?.providerService) {
//         return -1;
//       } else if (!a?.providerService && b?.providerService) {
//         return 1;
//       } else {
//         return 0;
//       }
//     }
//   );
//   return sorting;
// };

const percentage = (total: Array<number>, percent: number) => {
  const temp = total.reduce((sum: number, record: number) => sum + record);
  return (temp / percent) * 100;
};

function reverseArray(array: any[]) {
  return array?.map((item, idx) => array[array.length - 1 - idx]);
}

const generateTimeStamp = () => Date.now();

function generateRandomString(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// console.log(makeid(5));

function generateRandomIntegerInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateAlphabet() {
  return [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
}

function showTime(time: Date) {
  return new Intl.DateTimeFormat(REGION, TIME_OPTIONS as any).format(time);
}

/**
 * Calculates the sum of elements in the given array based on a key or by index.
 *
 * @param {Array} Arr - An array of elements to be summed up.
 * @param {string|undefined} [key] - The key to access the value of an element in the array.
 *
 * @returns {number} - The sum of the elements in the array.
 */
function getTotal(Arr: Array<any>, key: string | undefined): number {
  if (!key) {
    return Arr?.reduce((sum, item) => sum + item, 0);
  } else {
    return Arr?.reduce((sum, item) => {
      if (typeof item[key] === "number") {
        return sum + item[key];
      } else if (!isNaN(parseInt(item[key]))) {
        return sum + parseInt(item[key]);
      } else {
        return sum;
      }
    }, 0);
  }
}

/**
 * Checks if at least one element in one array is included in another array.
 *
 * @param {Array} array1 - The first array to be compared.
 * @param {Array} array2 - The second array to be compared.
 *
 * @returns {boolean} - Returns `true` if at least one element from `array1` is included in `array2`, and `false` otherwise.
 */
function isIncluded(array1: Array<any>, array2: Array<any>): boolean {
  return array1.some(function (element) {
    return array2.includes(element);
  });
}

function getTimeAgo(timestamp: {
  seconds: number;
  nanoseconds: number;
}): string {
  const date = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
  ); // Convert Firestore timestamp to Date object
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
    return "just now";
  } else if (diff < hour) {
    const minutesAgo = Math.floor(diff / minute);
    return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
  } else if (diff < day) {
    const hoursAgo = Math.floor(diff / hour);
    return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
  } else if (diff < week) {
    const daysAgo = Math.floor(diff / day);
    return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
  } else if (diff < month) {
    const weeksAgo = Math.floor(diff / week);
    return `${weeksAgo} ${weeksAgo === 1 ? "week" : "weeks"} ago`;
  } else if (diff < year) {
    const monthsAgo = Math.floor(diff / month);
    return `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`;
  } else {
    const yearsAgo = Math.floor(diff / year);
    return `${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`;
  }
}

interface ModifiedAt {
  date: string;
  time: string;
}
function getLastOnlineStatus(modifiedAt: ModifiedAt): string {
  const date = new Date(modifiedAt.date);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  // Calculate the number of hours since the user was last online
  const hoursAgo = Math.floor(diff / 1000 / 60 / 60);

  if (hoursAgo < 24) {
    // If the user was last online less than 24 hours ago, return the time they were last online
    return modifiedAt.time;
  } else {
    // If the user was last online more than 24 hours ago, return the date they were last online
    return date.toDateString();
  }
}

const copyToClipboard = (e) => {
  navigator.clipboard.writeText(e);
  alert("Copied to clipboard");
};

function openInNewTab(url: string | URL) {
  window.open(url, "_blank");
  window.focus();
}

const uString = {};
const uTime = {};
const RegEx = {
  phone:
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
};

const uLocalStorage = {
  getItem: (key: string): any => {
    if (!localStorage) {
      return;
    }
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
    } catch (error) {
      console.error("LOCAL STORAGE GET ITEM ERROR", error);
    }
  },

  setItem: (key: string, value: any): void => {
    if (!localStorage) {
      return;
    }
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("LOCAL STORAGE SET ITEM ERROR", error);
    }
  },

  removeItem: (key: string): void => {
    if (!localStorage) {
      return;
    }
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("LOCAL STORAGE REMOVE ITEM ERROR", error);
    }
  },

  clear: (): void => {
    if (!localStorage) {
      return;
    }
    try {
      localStorage.clear();
    } catch (error) {
      console.error("LOCAL STORAGE CLEAR ERROR", error);
    }
  },
};

export {
  generateRandomIntegerInRange,
  generateRandomString,
  reverseArray as reverseArry,
  generateAlphabet,
  UTILS_TEST,
  utilsTest,
  convertTime12to24,
  setPageLocation,
  getPageLocation,
  convert24To12,
  removePageLocation,
  changeTheMeridiem,
  convertMinIntoHoursAndMin,
  titleCase,
  extractTitleFirstWord,
  percentage,
  generateTimeStamp,
  showTime,
  getTotal,
  isIncluded,
  dayNameToPrefix,
  getTimeAgo,
  getLastOnlineStatus,
  copyToClipboard,
  openInNewTab,
  RegEx,
  //main feature
  uLocalStorage,
  uString,
  uTime,
};
