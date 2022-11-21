$('.submit').click((e) => {
    e.preventDefault();

    const data = $('form#data').serializeArray();
    console.log(data);

    if(Number(data[1].value) > 5 || Number(data[1].value) < -3) {
        $('.y_error').removeClass('d-none');
    } else {
        $('.y_error').addClass('d-none');
    }
});