const {UTILS_TEST,dayNameToPrefix} =  require("@blackfiredev12/utils")



console.log(UTILS_TEST);

const parameter = "monday"
const nanTime  = dayNameToPrefix(parameter)

console.log(`given parameter : ${parameter}  | output : ${nanTime}`);