const user = {
    name: 'mike',
    age: 30,
}

const user2 = user
//이거 안된다고 했지. 
//포인터 두개가 같은 메모리주소를 참조해서 
//같은 객체를 call 하게 된다.

console.log(user2)

user2.name = 'tom'
console.log('두개의 포인터가 하나의 객체를 참조하니까')
console.log(user)
console.log(user2)
//user2의 이름만 바꿨는데 2개가 다 바뀐걸 볼 수 있지?
//두 변수 모두 하나의 객체에 접근이 가능하게 된거임.

const user3 = Object.assign({}, user)
user3.name = 'unique value'


console.log('여기서부터는 새로 바꾼걸로 적용된다.')
console.log(user)
console.log(user2)
console.log(user3)
