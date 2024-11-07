function validateKeys<T extends object, K extends keyof T>(obj: T, keys: [K, ...K[]]): boolean {
    // check if keys is empty
    if (keys.length === 0) return false
    // Check if every key in the keys array exists in the object
    return keys.every(key => key in obj);
}

