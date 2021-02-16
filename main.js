/**
 * @param {array} A 
 */
function solution(A) {

    if (!A || A.length === 0) return 1;

    if (A.length > 10e5 || A.length < 0) throw new Error('The size of the array must be between 1 and 100000!');
    /**
     * 
     * @param {array} arr 
     */
    function filter (arr) {
        let length = arr.length,
            result = [],
            seen = new Set();

        outer:
        for (let i = 0; i < length; i++) {
            let value = arr[i];

            if (seen.has(value)) continue outer;

            seen.add(value);
            result.push(value);
        }

        return result;
        
    }
    
    A = filter(A);

    an = A.length + 1

    SomaPA = an * (1 + an) / 2;

    let soma = A.reduce((anterior, atual) => anterior + atual);

    return Math.abs(SomaPA - soma);


}