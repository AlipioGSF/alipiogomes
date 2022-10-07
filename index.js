const light = document.querySelector('#light');
const css = document.getElementById('style');

light.addEventListener('click',() => {
    const href = css.href;
    const point = Number(String(href).lastIndexOf('/'));
    const address = `${String(href).slice(0,point+1)}`;
    if(css.href == `${address}style.css`) css.href = `/assets/css/styleDark.css`;
    else css.href = `/assets/css/style.css`;
});
/*
function start() {
    const hora = new Date;
    if(hora.getHours() < 5 || hora.getHours() >= 17){
        css.href = '/assets/css/styleDark.css';
    };
};

start();
*/