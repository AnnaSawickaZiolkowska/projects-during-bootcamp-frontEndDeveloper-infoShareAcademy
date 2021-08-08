
const itemList = document.querySelector('#itemList')

function renderItems(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let power = document.createElement('span');
    let cosTam = document.createElement('span');
    let cosTamTam = document.createElement('span');


    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    power.textContent = doc.data().power;

    li.appendChild(name);
    li.appendChild(power);

    itemList.appendChild(li);
}


// getting data
db.collection('weapons').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderItems(doc);
    });
});