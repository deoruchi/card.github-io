
fetch('data.json')
.then((resp) => resp.json())
.then((json) => {

    let ui = document.querySelectorAll('li');

    for(i=0;i<json.length;i++){
        ui[i].setAttribute('title',json[i].amount)
    }   
})
