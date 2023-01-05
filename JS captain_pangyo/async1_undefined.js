

function getData() {
    let url = 'url'
    let tableData
    $.get(`${url}`, function(response) {
        tableData = response
    })

    return tableData
}

console.log(getData()) //undefined

// 왜? 비동기로 요청을 보내고 그 밑의 코드를 바로 읽어버려서
// return tableData가 let으로 선언만 되고 값 할당이 안됨.