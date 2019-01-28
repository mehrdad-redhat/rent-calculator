window.addEventListener('load', () => {
    let rent = document.getElementsByName('rent')[0];
    let deposit = document.getElementsByName('deposit')[0];
    let c_rent = document.getElementById('c-rent');
    let c_deposit = document.getElementById('c-deposit');
    let n_rent = document.getElementsByName('n-rent')[0];
    let n_deposit = document.getElementsByName('n-deposit')[0];
    let wrapper= document.getElementsByClassName('wrapper')[0];
    let totalRent = 0;
    let newRent = 0;
    let newDeposit = 0;

    wrapper.style.height=window.innerHeight+'px';

    rent.addEventListener('input', () => {
        baseCalculate();
    })

    deposit.addEventListener('input', () => {
        baseCalculate();
    })

    c_rent.addEventListener('input', () => {
        newCalculate('rent');
    })

    c_deposit.addEventListener('input', () => {
        newCalculate('deposit');
    })



    function baseCalculate() {
        totalRent = ((Number(rent.value) * 1000) + ((Number(deposit.value) / 300000) * 10000000)) / 1000;

        newRent = Number(totalRent).toFixed(3);
        c_rent.value = n_rent.value = c_rent.max = newRent;

        newDeposit = Number(totalRent) * 30;
        c_deposit.value = n_deposit.value = 0;
        c_deposit.max = newDeposit;

    }

    function newCalculate(type) {

        if (type == 'rent') {
            newDeposit = ((totalRent - c_rent.value) * 30).toFixed(0);
            c_deposit.value = n_deposit.value = newDeposit;
            n_rent.value=Number(c_rent.value).toFixed(3);
        }

        if (type == 'deposit') {
            newRent = ((totalRent * 1000) - ((c_deposit.value / 300000) * 10000000)) / 1000;
            c_rent.value = n_rent.value = newRent.toFixed(3);
            n_deposit.value=Number(c_deposit.value).toFixed(0);
            console.log(newRent);
            
        }

    }



});
