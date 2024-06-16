let burger_icon = document.querySelector('.burger_icon');
let burger_icon_img = document.querySelector('.burger_icon img');
let burger_switch = 'off';
let burger_content = document.querySelector('.burger_links');

burger_icon.addEventListener('click', function () {
    if (burger_switch == 'off') {
        burger_switch = 'on';
        burger_content.style.transform = 'translateX(0)';
        burger_icon_img.src = 'assets/img/icons/close.png';
        burger_icon_img.style.filter = 'invert(1)';
    } else {
        burger_switch = 'off';
        burger_content.style.transform = 'translateX(-100%)';
        burger_icon_img.src = 'assets/img/icons/burger.png';
        burger_icon_img.style.filter = 'invert(0)';
    }
    console.log(burger_switch);
}
);
//
