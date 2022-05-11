//  Когда пользователь прокрутит вниз 600px от начала документа, показать кнопку
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("mybtn").style.display = "block";
    } else {
        document.getElementById("mybtn").style.display = "none";
    }
}
// Когда пользователь нажимает на кнопку, происходит прокручивание до верхней части документа (к началу страницы)
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
