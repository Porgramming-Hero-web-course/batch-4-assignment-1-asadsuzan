// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function removeDuplicates(numbs: Array<number>): number[] {
    // create a number container to store unique number
    let newArr: number[] = []

    // iterate through the numbs array 
    for (let i: number = 0; i < numbs.length; i++) {
        // check the index of numbs[i] with indexOf and see if it is equal to i  
        if (numbs.indexOf(numbs[i]) === i) {
            // if its true ,then push it to new array 
            newArr.push(numbs[i])
        }
    }

    // return the newArr that contains unique elements 
    return newArr
}


