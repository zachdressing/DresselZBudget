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

let Ttl;
localStorage.getItem('Ttl') ? Ttl = parseInt(localStorage.getItem('Ttl')) : Ttl = 0;
total.textContent = "$" + Ttl;
let changeVal = 0;
let changeArr;
localStorage.getItem('changeArr') ? changeArr = localStorage.getItem('changeArr').split(',') : changeArr = [];

ttlBtn.addEventListener('click', () => {
    if (ttlInput.value) {
        Ttl = parseInt(ttlInput.value);
        changeArr.push(Ttl, "Starting Budget");
        localStorage.setItem('Ttl', Ttl)
        localStorage.setItem('changeArr', changeArr)
        genList(changeArr);
        total.textContent = "$" + Ttl
        ttlInput.value = '';
    }
})

lossBtn.addEventListener('click', () => {
    if (lossInput.value) {
        changeVal = (parseInt(lossInput.value));
        Ttl = Ttl + changeVal;
        changeArr.push(`${changeVal}`, lossDesc.value);
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
        Ttl = Ttl + changeVal;
        changeArr.push(`${changeVal}`, gainDesc.value);
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
        let butt = document.createElement('button');
        butt.classList.add('w-24');
        butt.classList.add('border')
        butt.classList.add('border-black')
        butt.innerText = "remove"
        butt.addEventListener('click', ()=>{
            changeArr.splice(changeArr.indexOf(p1.innerText));
            localStorage.setItem('changeArr', changeArr)
            genList();
        })
        it.innerText = array[desc];
        p2.appendChild(it);
        p1.classList.add('text-xl');
        p1.innerText = array[val];
        divC.classList.add('container');
        divC.appendChild(p1);
        divC.appendChild(p2);
        divC.appendChild(butt);
        change.appendChild(divC);
    }
}

genList();