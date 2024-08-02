// Global variables
let class_is_toggled = false;
// 
// 
// 
// scroll the page to specific element based on fixed nav bar
function nav_scroll_to(obj_id_name, nav_obj=undefined) {    
    var target_height = document.getElementById(obj_id_name).offsetTop;  // get target pos
    var adjust_height = (obj_id_name == "banner") ? 0 : (- 64 + 100);
    window.scrollTo({
        top: target_height + adjust_height,
        behavior: "smooth"
    });

    if(nav_obj) {
        nav_obj.parentNode.parentNode.classList.remove("menu--opened");
    }
}
// 
// 
// 
// toggle icon from burger to cross and add header--open class to the drop-down nav menu
function toggle_icon(delay=0) {    
    var icon_obj = document.getElementById("nav-icon");
    var header_obj = document.getElementById("header");
    var Auroramob_title_obj = document.getElementsByClassName("Auroramob-title")[0];

    setTimeout(function() {
        if (header_obj.classList.contains("header--open")) {
            header_obj.classList.remove("header--open");
            icon_obj.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" aria-label="burger" role="presentation"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.74763 12C4.74763 11.5858 5.08342 11.25 5.49763 11.25H18.5027C18.9169 11.25 19.2527 11.5858 19.2527 12C19.2527 12.4142 18.9169 12.75 18.5027 12.75H5.49763C5.08342 12.75 4.74763 12.4142 4.74763 12Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.74763 16.0017C4.74763 15.5875 5.08342 15.2517 5.49763 15.2517H18.5027C18.9169 15.2517 19.2527 15.5875 19.2527 16.0017C19.2527 16.4159 18.9169 16.7517 18.5027 16.7517H5.49763C5.08342 16.7517 4.74763 16.4159 4.74763 16.0017Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.74729 7.99834C4.74729 7.58412 5.08308 7.24834 5.49729 7.24834H18.5024C18.9166 7.24834 19.2524 7.58412 19.2524 7.99834C19.2524 8.41255 18.9166 8.74834 18.5024 8.74834H5.49729C5.08308 8.74834 4.74729 8.41255 4.74729 7.99834Z"></path></svg>';
        } else {
            header_obj.classList.add("header--open");
            icon_obj.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" aria-label="cross" role="presentation"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"></path></svg>';
        }
    }, delay * 1000);
}
// 
// 
// 
// toggle the background color of nav bar
function toggle_header_bg() {    
    var header_obj = document.getElementById("header");
    var main_body_obj  = document.getElementById("main-body");
    var Auroramob_title_obj = document.getElementsByClassName("Auroramob-title")[0];

    if (main_body_obj.getBoundingClientRect().top == 0) {
        header_obj.classList.remove("header--scrolled");
        Auroramob_title_obj.src = "./src/img/icon/Auroramob-title-white.png";
    } else {
        header_obj.classList.add("header--scrolled");
        Auroramob_title_obj.src = "./src/img/icon/Auroramob-title-black.png";
    }
}
// 
// 
// 
// toggle the drop-down menu of nav bar
function toggle_lang_menu(obj) {
    var menu_obj = obj.parentNode;

    if (menu_obj.classList.contains("menu--opened")) {
        menu_obj.classList.remove("menu--opened");
    } else {
        menu_obj.classList.add("menu--opened");
    }
    // var drop_obj = menu_obj.querySelector("drop");
    // var drop_posY = document.defaultView.getComputedStyle(bar_obj, null).transform.split("(")[1].split(")")[0].split(",")[5];  // receiving transform value: matrix(a, b, c, d, e, posY);

    // if (drop_posY)
}
// 
// 
// 
// horizontally scroll to the product pod according to index
function product_scroll_to(obj) {
    var obj_index = $(obj).index();
    var bar_obj = document.getElementsByClassName("product-bar")[0];
    var pod_objs = document.getElementsByClassName("product-pod");
    var logo_objs = obj.parentNode.getElementsByClassName("logo-pod");

    var pod_width = pod_objs[0].getBoundingClientRect().width;
    var gap_width = parseFloat(document.defaultView.getComputedStyle(bar_obj, null).gap);
    var move_width = (pod_width + gap_width) * obj_index;  // translateX pattern: 0th pod = 0px, 1st = 1*w + 1*g, 2nd = 2*w + 2*g ...

    bar_obj.style.transform = "translateX(" + (-move_width) + "px)";

    // remove the selected status from all pods & logos, and then add it to the clicked logo & corresponding pod
    for (var i = 0; i < logo_objs.length; i++) {
        pod_objs[i].classList.remove("pod--selected");
        logo_objs[i].classList.remove("logo--selected");
    }      
    obj.classList.add("logo--selected");
    pod_objs[obj_index].classList.add("pod--selected");
}
// 
// 
// 
// vertically scroll to the about-us pod according to index
function ab_scroll_to(obj) {
    var obj_index = $(obj).index();
    var bar_obj = document.getElementsByClassName("ab-bar")[0];
    var pod_objs = document.getElementsByClassName("ab-pod");
    var title_objs = obj.parentNode.getElementsByClassName("title");

    var pod_height = pod_objs[0].getBoundingClientRect().height;

    bar_obj.style.transform = "translateY(" + (-pod_height * obj_index) + "px)";

    // remove the selected status for all titles, and then add it to the selected title
    for (var i = 0; i < title_objs.length; i++) {
        title_objs[i].classList.remove("title--selected");
    }      
    obj.classList.add("title--selected");
}
// 
// 
// 
// display the corresponding job-pod according to the job-title selected
function job_bar_init() {
    var default_width = document.getElementsByClassName("default-block")[4].getBoundingClientRect().width;
    var bar_obj = document.getElementsByClassName("job-bar")[0];
    var pod_objs = document.getElementsByClassName("job-pod");
    var gap_width = parseFloat(document.defaultView.getComputedStyle(bar_obj, null).gap);
    var pod_length = pod_objs.length;

    const is_mobile = window.matchMedia("(max-width: 767px)").matches;   // Use a media query to check for media size
    // const is_1023 = window.matchMedia("(max-width: 1023px)").matches;   // Use a media query to check for media size

    if (!is_mobile) {
        bar_obj.style.width = parseInt((default_width  - 2 * gap_width) / 3) * pod_length + gap_width * (pod_length - 1) + "px";  // ([df-block width] + [# of pods - 3] * (([df-block width] - [gap] * 2) / 3 + [gap]))
    } else {
        bar_obj.style.width = "calc((100vw - 80px) * " + (pod_length - 3) + " + " + gap_width + "px * " + (pod_length - 3 - 1) + ")";  // 767px:   (100vw - 80px) * [# of pods] + 15px * [# of pods - 1]
    }
}
// 
// 
// 
// set join-us bar transform value in order to keep the carousel still work when window resize
function set_joinus_resize_carousel() {  
    var bar_obj = document.getElementsByClassName("job-bar")[0];
    bar_obj.style.transform = "translateX(0)";
}
// 
// 
// 
// the following is the carousel function, used when adding new jobs into the page
function lr_carousel(direction, col_num) { 
    var direct_sign = (direction == "left") ? -1 : 1;
    var bar_obj = document.querySelector(".job-bar");
    var original_posX = document.defaultView.getComputedStyle(bar_obj, null).transform.split("(")[1].split(")")[0].split(",")[4];  // receiving transform value: matrix(a, b, c, d, posX, f);
    var pod_objs = document.getElementsByClassName("job-pod");
    var pod_width = pod_objs[0].getBoundingClientRect().width;
    var gap_width = parseFloat(document.defaultView.getComputedStyle(bar_obj, null).gap);
    gap_width = (gap_width) ? gap_width : 0; // if there's no gap between pods

    var move_width = pod_width + gap_width;

    var current_page = original_posX / -move_width;
    if (!Number.isInteger(current_page)) {
        return;
    }

    var new_page;

    if (current_page + direct_sign < 0) {
        new_page = pod_objs.length - 1 - col_num;  // since 0 and 4 are same, 1 page left for 0 is 1 page left for 4, which is 3
        bar_obj.classList.remove("transition");
        bar_obj.style.transform = "translateX(" + (-move_width * (pod_objs.length - col_num)) + "px)";
        setTimeout(function() {
            bar_obj.classList.add("transition");
        }, 50);  // delay to make sure "transition" class is added after the bar's motion
    } else if (current_page + direct_sign > pod_objs.length - col_num) {
        new_page = 1;  // since 0 and 4 are same, 1 page right for 4 is 1 page right for 0, which is 1
        bar_obj.classList.remove("transition");
        bar_obj.style.transform = "translateX(" + (-move_width * 0) + "px)";
        setTimeout(function() {
            bar_obj.classList.add("transition");
        }, 50);  // delay to make sure "transition" class is added after the bar's motion
    } else {
        new_page = current_page + direct_sign;
    }
    setTimeout(function() {
        bar_obj.style.transform = "translateX(" + (-move_width * new_page) + "px)";
    }, 100);  // delay to make sure translate is added after "transition" class is added
}
// 
// 
// 
// jump to new page if the selected option has address of destination as its value
function window_jump_to(obj) {
    window.location.href = obj.title;
}
// 
// 
// 
// Initialize the scroll position of bars to its center
function bar_scroll_init(status) {  // receving 0 and 1, 1 means init, 0 means recover to original
    var ab_bar_obj = document.getElementsByClassName("ab-bar")[0];
    var ab_bar_width = ab_bar_obj.getBoundingClientRect().width;
    var job_bar_obj = document.getElementsByClassName("job-bar")[0];
    var job_bar_width = job_bar_obj.getBoundingClientRect().width;

    if (status) {
        ab_bar_obj.parentNode.scrollLeft = ab_bar_width / 2;
        job_bar_obj.parentNode.scrollLeft = job_bar_width / 2;
    } else {
        ab_bar_obj.parentNode.scrollLeft = 0;
        job_bar_obj.parentNode.scrollLeft = 0;
    }
}
// 
// 
// 
// remove class of some element when window resize(), getting 0 and 1 for status, 1 means execute, 0 means recover
function toggle_class_for_mobile(status) {
    var ab_detail_obj = document.getElementById("about-us").getElementsByClassName("detail")[0];
    var product_pod_objs = document.getElementsByClassName("product-pod");

    if (status) {
        ab_detail_obj.classList.remove("box");
        for (var i = 0; i < product_pod_objs.length; i++) {
            product_pod_objs[i].classList.remove("box");
        }

        class_is_toggled = true;
    } else {
        ab_detail_obj.classList.add("box");
        for (var i = 0; i < product_pod_objs.length; i++) {
            product_pod_objs[i].classList.add("box");
        }

        class_is_toggled = false;
    }
}
// 
// 
// 
// check if the open device is mobile and then toggle the classes according to the status
function check_is_mobile() {
    const is_mobile = window.matchMedia("(max-width: 767px)").matches;   // Use a media query to check for mobile devices

    if (is_mobile && !class_is_toggled) {
        toggle_class_for_mobile(1);
        bar_scroll_init(1);
    } else if (!is_mobile && class_is_toggled) {
        toggle_class_for_mobile(0);
        bar_scroll_init(0);
    }
}
window.addEventListener("load", function() {
    job_bar_init();
    check_is_mobile();
});
window.addEventListener("resize", function() {
    job_bar_init();
    set_joinus_resize_carousel();
    check_is_mobile();
});
