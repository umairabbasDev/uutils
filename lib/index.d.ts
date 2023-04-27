export declare const REGION: undefined;
export declare const TIME_OPTIONS: {
    hour: string;
    minute: string;
    hour12: boolean;
};
export declare const MINUTE = "min";
export declare const HOUR = "hr";
declare const UTILS_TEST = "Util testing ";
declare const convertTime12to24: (time12h: any) => string;
declare const convert24To12: (time: string) => boolean;
export declare const formateTheDate: (date: string) => boolean;
declare const changeTheMeridiem: (time: string, newMeridiem: string) => string;
declare const convertMinIntoHoursAndMin: (time: string) => string;
declare const titleCase: (str: string) => string;
declare const dayNameToPrefix: (dayName: string) => string;
declare const extractTitleFirstWord: (str: string) => string;
declare const percentage: (total: number[], percent: number) => number;
declare function reverseArray(array: any[]): any[];
declare const generateTimeStamp: () => number;
declare function generateRandomString(length: number): string;
declare function generateRandomIntegerInRange(min: number, max: number): number;
declare function generateAlphabet(): string[];
declare function showTime(time: Date): string;
/**
 * Calculates the sum of elements in the given array based on a key or by index.
 *
 * @param {Array} Arr - An array of elements to be summed up.
 * @param {string|undefined} [key] - The key to access the value of an element in the array.
 *
 * @returns {number} - The sum of the elements in the array.
 */
declare function getTotal(Arr: any[], key: string | undefined): number;
/**
 * Checks if at least one element in one array is included in another array.
 *
 * @param {Array} array1 - The first array to be compared.
 * @param {Array} array2 - The second array to be compared.
 *
 * @returns {boolean} - Returns `true` if at least one element from `array1` is included in `array2`, and `false` otherwise.
 */
declare function isIncluded(array1: any[], array2: any[]): boolean;
declare function getTimeAgo(timestamp: {
    seconds: number;
    nanoseconds: number;
}): string;
interface ModifiedAt {
    date: string;
    time: string;
}
declare function getLastOnlineStatus(modifiedAt: ModifiedAt): string;
declare const copyToClipboard: (e: string) => void;
declare function openInNewTab(url: string | URL): void;
declare const uString: {};
declare const uTime: {};
declare const RegEx: {
    phone: RegExp;
};
declare const uLocalStorage: {
    getItem: (key: string) => any;
    setItem: (key: string, value: any) => void;
    removeItem: (key: string) => void;
    clear: () => void;
};
export { generateRandomIntegerInRange, generateRandomString, reverseArray as reverseArry, generateAlphabet, UTILS_TEST, convertTime12to24, convert24To12, changeTheMeridiem, convertMinIntoHoursAndMin, titleCase, extractTitleFirstWord, percentage, generateTimeStamp, showTime, getTotal, isIncluded, dayNameToPrefix, getTimeAgo, getLastOnlineStatus, copyToClipboard, openInNewTab, RegEx, uLocalStorage, uString, uTime, };
