function doubleEachNumber(arr) {
    const doubleNum = arr.map((item) => {
        if(typeof item === "number") {
            return item * 2;
        };
        return item;
    });
    return doubleNum;
};

console.log(doubleEachNumber([2, "5", 100, "100", "blablabla"]));