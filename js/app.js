//Grab targets by ID
let ttlBtn = document.getElementById('ttlBtn');
let ttlInput = document.getElementById('ttlInput')
let lossBtn = document.getElementById('lossBtn');
let lossInput = document.getElementById('lossInput')
let lossDesc = document.getElementById('lossDesc')
let gainBtn = document.getElementById('gainBtn');
let gainInput = document.getElementById('gainInput')
let gainDesc = document.getElementById('gainDesc')
let total = document.getElementById('total');
let change = document.getElementById('change');

//Set basic values
let Ttl;
localStorage.getItem('Ttl') ? Ttl = parseInt(localStorage.getItem('Ttl')) : Ttl = 0;
total.textContent = "$" + Ttl;
console.log(Ttl)
let changeVal = 0;
let changeArr;
localStorage.getItem('changeArr') ? changeArr = localStorage.getItem('changeArr').split(',') : changeArr = [];
console.log(changeArr);

ttlBtn.addEventListener('click', () => {
    if (ttlInput.value) {
        Ttl = parseInt(ttlInput.value);
        total.textContent = "$" + Ttl;
        ttlInput.value = '';
    }
    localStorage.setItem('Ttl', Ttl)
})

lossBtn.addEventListener('click', () => {
    if (lossInput.value) {
        changeVal = (parseInt(lossInput.value)) * -1;
        Ttl = Ttl + changeVal;
        let tempArr = [changeVal, lossDesc.value];
        changeArr.push(tempArr);
        localStorage.setItem('Ttl', Ttl)
        localStorage.setItem('changeArr', changeArr)
        genList(changeArr);
        total.textContent = "$" + Ttl
        lossInput.value = '';
        lossDesc.value = '';
    }

})

gainBtn.addEventListener('click', () => {
    if (gainInput.value) {
        changeVal = (parseInt(gainInput.value));
        console.log(changeVal)
        Ttl = Ttl + changeVal;
        let tempArr = [changeVal, gainDesc.value];
        changeArr.push(tempArr);
        localStorage.setItem('Ttl', Ttl)
        localStorage.setItem('changeArr', changeArr)
        genList(changeArr);
        total.textContent = "$" + Ttl
        gainInput.value = '';
        gainDesc.value = '';
    }
})

const genList = () => {
    change.innerHTML = '';
    let array = localStorage.getItem('changeArr').split(',');
    for (let i = 0; i < changeArr.length; i += 2) {
        let val = i;
        let desc = i;
        desc++;
        let divC = document.createElement('div')
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let it = document.createElement('i');
        it.innerText = array[desc];
        p2.appendChild(it);
        p1.classList.add('text-xl');
        p1.innerText = array[val];
        divC.classList.add('container');
        divC.appendChild(p1);
        divC.appendChild(p2);
        change.appendChild(divC);
    }
}

genList();