function findWordsContaining(words: string[], x: string): number[] {
    const contain: number[] = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                contain.push(i);
                break;
            }
        }
    }
    return contain;
}
const words = ["leet", "code"];
console.log(findWordsContaining(words, "o"));
