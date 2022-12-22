const filterOutOdds = (...nums) => {
    return nums.filter((num) => num % 2 === 0)
};


const findMin = (...args) => Math.min(...args)


const mergeObject = (firstObj, secondObj) => {
    return {...firstObj, ...secondObj};
};

const doubleAndReturnArgs = (arr, ...args) => {
    return [...arr, ...args.map((val) => val * 2)]
};

const removeRandom = (items) => {
    let randomIdx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIdx), ...items.slice(randomIdx + 1)]
};

const extend = (array1, array2) => {
    return [...array1, ...array2]
};

const addKeyVal = (obj, key, val) => {
    return {...obj, [key] : val}
};

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
};

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
};

const update = (obj, key, val) => {
    return {...obj, [key]:val}
}
