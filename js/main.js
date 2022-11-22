


$('.submit').click((e) => {
    e.preventDefault();

    const data = $('form#data').serializeArray();
    console.log(data);

    
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

    if(((x * x + y * y) == (r/2)) && x < 0 && y < 0) {
        console.log('ok'); 
    } else {
        console.log('bad')
    }

    
});
