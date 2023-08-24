/*
 * Utils.js
 * 
 * This is Mathematics Utilities.
 * 
 * License: MIT
 * Author: M.tsuchihashi
 */

class AssertionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AssertionError';
    }
}

function Assert(expression) {
    if ( expression ) return;
    throw new AssertionError();
}

function randint(n) {
    Assert(Number.isSafeInteger(n));
    return Math.floor(Math.random() * n);
}

function range(n) {
    Assert(Number.isSafeInteger(n));
    return [...(new Array(n))].map((e, i) => i);
}

function swap(arr, i, j) [
    Assert( Array.isArray(arr) );
    Assert(Number.isSafeInteger(i));
    Assert(Number.isSafeInteger(j));

    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function suffle(arr) {
    Assert( Array.isArray(arr) );
    const _arr = structuredClone(arr)
    const last = _arr.length;
    let i = last - 1;
    while (i > 0) {
	const j = randint(last);
	swap(_arr, i--, j);
    }
    return _arr;
}

// function toPermutation(arr) {
//     Assert( Array.isArray(arr) );
//     return arr.map((e,i) => [i, e]);
// }
// 
// function permutate(arr) {
// }

function toTransposition(arr) {
    Assert( Array.isArray(arr) );
    const _arr = structuredClone(arr)
    const last = _arr.length;
    const ret = [];
    for ( let i = 0 ; i < last ; i++ ) {
	for ( let j = i + 1 ; j < l ; j++ ) {
	    if ( _arr[j] != i ) continue
	    ret.push([i, j]);
	    swap(_arr, i, j);
	    break;
	}
    }
    return ret.reverse();
}

class Matrix2 {
#arr = null;
#detVal = NaN;
    constructor(arr) {
	Assert( Array.isArray(arr) );
	Assert( arr.length == 4 );
	this.#arr = structuredClone(arr);
	this.#detVal = this.#arr[0] * this.#arr[3] - this.#arr[1] * this.#arr[2];
    }
    hasDet() {
	return Number.isSafeInteger(this.#detVal);
    }
    get det() {
	return this.#detVal;
    }
    scalar(l) {
	return new Matrix2(this.#arr.map(e => l * e));
    }
    inv() {
    	return new Matrix2([
    	    this.#arr[3], -1 * this.#arr[1],
    	    -1 * this.#arr[2], this.#arr[0]
    	]).scalar(1/this.#detVal);
    }
    add(A) {
    	return new Matrix2(this.#arr.map((e,i) => e + A.#arr[i]));
    }
    sub(A) {
    	return new Matrix2(this.#arr.map((e,i) => e - A.#arr[i]));
    }
    // A x B -> A.mul(B)
    mulMat(A) {
    	return new Matrix2([
    	    this.#arr[0] * A.#arr[0] + this.#arr[1] * A.#arr[2], this.#arr[0] * A.#arr[1] + this.#arr[1] * A.#arr[3],
    	    this.#arr[2] * A.#arr[0] + this.#arr[3] * A.#arr[2], this.#arr[2] * A.#arr[1] + this.#arr[3] * A.#arr[3]
    	]);
    }
    equals(A) {
	return this.#arr.map((e,i) => [e, A.#arr[i]]).reduce((p,c) => p && c[0] == c[1], true)
    }
}

class Matrix2E extends Matrix2 {
    constructor() {
	super([1, 0, 0, 1]);
    }
}

    





