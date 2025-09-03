function numJewelsInStones(jewels: string, stones: string): number {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (stones[i] === jewels[j]) {
                count++;
            }
        }
    }

    return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
