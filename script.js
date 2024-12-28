const toggle_btn = document.querySelector('.mobile-view-toggle-btn');
const topbar= document.querySelector('.top-bar');
const back_to_top_btn = document.querySelector('.back-to-top');
const li_list_options = document.querySelector('.li-items');
const a_tag = document.querySelectorAll('a');

toggle_btn.addEventListener('click', function(){
    toggle_btn.classList.toggle('active');
    li_list_options.classList.toggle('active');
})

document.addEventListener('scroll', function(){
    li_list_options.classList.remove('active');
    toggle_btn.classList.remove('active');
    if (scrollY > 90){
        topbar.classList.add('active');
        back_to_top_btn.classList.add('active');
    } else {
        topbar.classList.remove('active');
        back_to_top_btn.classList.remove('active');
    }
})

const place_order = document.querySelector('.p-an-order');

place_order.addEventListener('click', function(){
    window.location.href='https://wa.me/263715026100/?text=Hi%20ZECFRA!%20I%20am%20from%20your%20website.%20I%20need%20to%20place%20an%20order:%20';
})

const bt_app = document.querySelectorAll('.add-to-cart');

for (let i = 0; bt_app.length; i++){
    bt_app[i].addEventListener('click', function(){
       window.location.href='https://wa.me/263715026100/?text=Hi%20ZECFRA!%20I%20am%20from%20your%20website.%20Can%20we%20talk?%20';
    })

}

