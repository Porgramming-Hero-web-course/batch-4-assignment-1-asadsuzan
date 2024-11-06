// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
// Sample Input:
// countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
// Sample Output:
// 2;

function countWordOccurrences(sentence: string, word: string): number {
    // Split the sentence into words using non-word characters 
    const words: Array<string> = sentence.trim().split(/\W+/);

    // Convert the target word to lowercase for case-insensitive comparison
    const target: string = word.toLowerCase();

    // Count occurrences using forEach
    let count: number = 0;
    words.forEach((ele: string) => {
        if (ele.toLowerCase() === target) {
            count += 1;
        }
    });

    return count;
}


