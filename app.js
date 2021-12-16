

async function apIget (){
    try {
    var getApi = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(getApi.ok===false){
        throw 'page not found'
    }
    var conJason = await getApi.json()
    //return conJason;
    console.log(conJason);
    }
    catch(err){
        console.log(err);
        console.log('through Erro');
    }

    
}
apIget ()
