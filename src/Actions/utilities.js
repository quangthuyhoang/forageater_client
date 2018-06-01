// Minor Resuable Functions For Basic Needs

// converts object to array
export function objArray(obj) {
    return Object.keys(obj).map(el => obj[el])
}

