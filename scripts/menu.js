$('.menuIcon').on('click',function(){
    $('.menuList').toggleClass('show');

    //change icon when menuList showed
    $(this).find('div:nth-child(1)').toggleClass('closeIcon1');
    $(this).find('div:nth-child(3)').toggleClass('closeIcon3');
    $(this).find('div:nth-child(2)').toggleClass('closeIcon2');

    //color layer effect for menuList
    $('.menuList .effect').toggleClass('effect_active');
})