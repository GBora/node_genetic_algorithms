export /**
 * Selects a random element from array
 *
 * @template T
 * @param {T[]} haystack
 * @returns {T}
 */
let selectRandomFromArray = function<T>(haystack: T[]): T {
    if(!haystack.length) {
        throw new Error('bad array passed in');
    }
    let index = Math.floor((Math.random() * haystack.length));
    return haystack[index];
}