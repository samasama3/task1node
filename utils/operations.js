function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return 'is not palindrome';
        }
    }
    return 'is palindrome';
}

function fibonacci(num) {
    if (num <= 0) {
        return [];
    } else if (num<2) {
        return num;
    } else {
        const fibSequence = [0, 1];
        for (let i = 2; i < num; i++) {
            fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
        }
        return fibSequence;
    }
}

module.exports = {isPalindrome, fibonacci}
