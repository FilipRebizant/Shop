$(document).ready(function () {

    $('.addToBasket').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            $quantity = $this.closest('.row').find('input[name=quantity]'),
            $name = quantity = $this.closest('.row').find('input[name=name]');

        $.ajax({
            type: "POST",
            url: '/addToBasket',
            data: {name: $name.val(), quantity: $quantity.val()}

        }).done(function (data) {
            $('.info').text(data);

        }).fail(function (data) {
            console.log('error');
            console.log(data);
        });
    });

    $('.removeFromBasket').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            $quantity = $this.closest('.row').find('input[name=quantity]'),
            $name = quantity = $this.closest('.row').find('input[name=name]'),
            $amount = $this.closest('.row').find('span');

        $.ajax({
            type: "POST",
            url: '/removeFromBasket',
            data: {name: $name.val(), quantity: $quantity.val()}

        }).done(function (data) {
            $('.info').text(data.info);
            $amount.text(data.newQuantity);
            if (data.newQuantity <= 0 ){
                $this.closest('.row').fadeOut();
            }
        }).fail(function (data) {
            console.log('error');
            console.log(data);
        });
    });

});
