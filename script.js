"use strict"

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}

let profile = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
        },
    },
    info: {
        a: 1,
        b: 2,
        c: 3,
    }
}

function deepFreeze (objToFreeze) {
    if (typeof objToFreeze === `object`) Object.freeze(objToFreeze)
    for (let key in objToFreeze) {
        let value = objToFreeze[key]
        console.log(`key: ${key}, value: ${value}`);

        if (typeof value === `object`) deepFreeze(value)
    }
    return objToFreeze
}

const freezedObj = deepFreeze(user)
console.log(Object.getOwnPropertyDescriptors(freezedObj.data.d.d1))
console.log(Object.isFrozen(freezedObj.data.d1))
console.log(`----------------------------------------------`)
const freezedObjProfile = deepFreeze(profile)
console.log(Object.getOwnPropertyDescriptors(freezedObjProfile.data.d))
console.log(Object.isFrozen(freezedObjProfile.info))
