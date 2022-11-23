$(function () {
    $('.submit0').click(function (){
        $('.app').removeClass('d-none');
        $('.result').removeClass('d-none');
        $('.opening').addClass('d-none');
        $('.opening').removeClass('d-flex')
    });
});



$('.submit').click((e) => {
    e.preventDefault();

    const data = $('form#data').serializeArray();

    //valid
    if(Number(data[1].value) > 5 || Number(data[1].value) < -3) {
        $('.y_error').removeClass('d-none');
    } else {
        $('.y_error').addClass('d-none');
    };


    if(!data[2] || data[2].value < 0) {
        $('.r_error').removeClass("d-none");
    } else {
        $('.r_error').addClass('d-none');
    };

    let x = Number(data[0].value);
    let y = Number(data[1].value);
    let r = Number(data[2].value);
    let r_cond = x * x + y * y;
    let r0 = (r/2) * (r/2);

    if((r_cond <= r0 && x < 0 && y < 0) || (x <= r/2 && y <= r) || (y <= (-r/2) && y <= x && x <= r)) {
        choise = ('You are free'); 
    } else {
        choise = ('You choose to stay in Matrix');
    };

    let now = new Date();
    let nowT = (`${now.getFullYear()}/${now.getUTCDate()}/${now.getMonth()} ${now.getHours()}:${now.getMinutes()}`);

    const response = document.querySelector('.response');

    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let div5 = document.createElement('div'); 

    div1.textContent = `${nowT}`;
    div2.textContent = `${x}`;
    div3.textContent = `${y}`;
    div4.textContent = `${r}`;
    div5.textContent = `${choise}`;

    response.append(div1, div2, div3, div4, div5);
    
});
