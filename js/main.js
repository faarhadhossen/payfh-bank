const logInBtn = document.getElementById('login-btn').addEventListener('click', ()=>{
    const logInArea = document.getElementById('login-area').style.display = 'none';

    const transition = document.getElementById('transaction').style.display ='block';
})



//transition event

const depoBtn = document.getElementById('deposite-btn').addEventListener('click',()=>{
    const depoAmount = document.getElementById('deposite-amount').value;
    const depoNum = parseFloat(depoAmount);

    const currentDeposit = document.getElementById('current-depo').innerText;

    const currentDepoNum = parseFloat(currentDeposit);

    const totalDepo = currentDepoNum + depoNum;

    document.getElementById('current-depo').innerText = totalDepo;

    document.getElementById('deposite-amount').value = '';
})