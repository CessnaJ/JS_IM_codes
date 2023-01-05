const user = {
    name:'Mike',
    age: 30,
}

const key_res = Object.keys(user)
const val_res = Object.values(user)
const key_val_res = Object.entries(user)


console.log(key_res)
console.log(val_res)
console.log(key_val_res)



//아래는 반대로 arr에서 객체로 변하는 fromEntries
let arr = [
    ['mon', '월'],
    ['tue', '화']
]

const obj_res = Object.fromEntries(arr)

console.log(obj_res)