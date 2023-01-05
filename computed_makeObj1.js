//틀만 파놓고, 어떤게 키가 될지 모르는걸 만들때 유용.
//재사용성 up

function makeObj (key, val) {
    return {
        [key]: val
    }
}

const obj = makeObj('나이', 33)

console.log(obj)
// { '나이': 33 }이라고 출력이 되네.

const obj2 = makeObj('성별', 'male')
console.log(obj2)

