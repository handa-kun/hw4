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
        choise = ('You chose to stay in Matrix');
    };

    let now = new Date();
    let nowT = (`${now.getFullYear()}/${now.getUTCDate()}/${now.getMonth()} ${now.getHours()}:${now.getMinutes()}`);

    /*const response = document.querySelector('.response');

    let td1 = document.createElement(`${'td'}`);
    /*let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td'); 
    
    td1.textContent = `${nowT}`;
      td1.textContent = `${x}`;
    /*td3.textContent = `${y}`;
    td4.textContent = `${r}`;
    td5.textContent = `${choise}`;
    response.append(td1 , td1);  
    */
   
   $(function () {
   let td1 = $('<td></td>').text(`${nowT}`);
   let td2 = $('<td></td>').text(`${x}`);
   let td3 = $('<td></td>').text(`${y}`);
   let td4 = $('<td></td>').text(`${r}`);
   let td5 = $('<td></td>').text(`${choise}`);
   $('.response').append(td1, td2, td3, td4, td5);
    });

});
