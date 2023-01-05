let n = "name"
let a = "age"


//computed property니까 [a] 변수에 할당 된 값이 대응된다

const user = {
    [n] : 'Mike',
    [a] : 30,
    [1+4] : 5,
}

console.log(user[n])
//이렇게 하면 Mike가 잘 나오는데

n = 'changed'
//이후 a의 값이 바뀌었는데 아래에서 console.log를 찍어보면
// user obj의 값이 그대로다.



console.log(user.n)
console.log(user)
//이렇게 하면 undefined 나오네?


console.log(user)