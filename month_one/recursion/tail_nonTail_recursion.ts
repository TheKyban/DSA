/**
 * NON TAIL RECURSION
 * In Which recursion call is not the last operation in the function.
 */

function factorialNonTail(n: number) {
    if (n === 0) return 1;
    return n * factorialNonTail(n - 1);
}

/**
 * In the above fn after recursion we are performing multiplication
 * ex:-  call fn with 5
 * fn(5)
 * call stack
 * fn(0) -> 1
 * fn(1) -> 1 * 1  = 1
 * fn(2) -> 2 * 1  = 2
 * fn(3) -> 3 * 2  = 6
 * fn(4) -> 4 * 6  = 24
 * fn(5) -> 5 * 24 = 120
 *
 * after recursion multiplication is performed
 */

/**
 * TAIL RECURSION
 * the function in which last operation is recursion calling
 */

function factorialTail(n: number, acc: number = 1) {
    if (n === 0) return acc;
    return factorialTail(n - 1, n * acc);
}

/**
 * In the above fn we are only performing recursion call as last operation
 * ex pass 5 to fn
 * fn(5)
 * Call Stack
 * fn(0,120) -> 120
 * fn(1,120)
 * fn(2,120)
 * fn(3,60)
 * fn(4,20)
 * fn(5,1)
 */
