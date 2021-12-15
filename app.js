

async function apIget (){
    var getApi = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    var conJason = await getApi.json()
    console.log(conJason);
}

apIget()