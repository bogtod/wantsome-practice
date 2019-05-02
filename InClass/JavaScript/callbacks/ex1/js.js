const callbackFn = () => console.log('S-a apelat functia de tipul callback');

const callbackPracticeFn = (loopUntil, callback) => {
    for(let i = 0; i < loopUntil; i++) {
        console.log(i);
    }
    callback();
};

callbackPracticeFn(20, callbackFn);