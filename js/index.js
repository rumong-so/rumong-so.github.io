
var line_navbar=document.querySelectorAll(".nav-item .line-navbar-menu");
var line_toggler=document.querySelectorAll(".button-toggler .line-toggler");
var page_link_top=document.querySelectorAll(".pagination-top .text-dark");
var section_content=document.querySelectorAll("div.news-top");
var news_content=document.querySelectorAll(".news-content");
var news_link=document.querySelectorAll("a.news-link");
var img_md=document.querySelectorAll("div.news-middle img.d-lg-none");
var img_lg=document.querySelectorAll("div.news-middle img.d-lg-inline");
var name_menu,toggler_active,pagination_active;

$(document).ready(function() {

	$("[src='css/logo_rumongso1.png']").animate({opacity: '1',bottom: '0px'},700,"jswing");
	$(".navbar-expand .nav-item").animate({opacity: '1',top: '3px'},700,"jswing");
	$(".button-toggler").animate({opacity: '1',bottom: '0px'},700,"jswing");
	$("a.news-link").animate({opacity:"1",right:"0px"},800,"jswing");
});

function MOUSEOVER_NAVBAR (e) {

	name_menu=e.target.innerHTML.split("<div")[0].trim();
	
	if (name_menu=="About") {

		line_navbar[1].setAttribute("style","width: 100%");		

	} else if (name_menu=="Blog") {

		line_navbar[2].setAttribute("style","width: 100%");		

	} else {

		if (name_menu=="Contact") {

			line_navbar[3].setAttribute("style","width: 100%");		
		}
	}
}

function MOUSEOUT_NAVBAR (e) {
	
	if (name_menu=="About") {

		line_navbar[1].removeAttribute("style");

	} else if (name_menu=="Blog") {

		line_navbar[2].removeAttribute("style");

	} else {

		if (name_menu=="Contact") {

			line_navbar[3].removeAttribute("style");
		}		
	}
}

function BUTTON_TOGGLER (e) {

	toggler_active=e.target.classList.contains("active");

	if(toggler_active==false) {

		e.target.classList.add("active");

		line_toggler[0].setAttribute("style","transform: rotate(-55deg)")
		line_toggler[1].setAttribute("style","opacity: 0")
		line_toggler[2].setAttribute("style","transform: rotate(55deg)")
		$(document).ready(function() {

			$(".nav-collapse").animate({left: '0px'},1000,"jswing");
			$(".nav-collapse").animate({height: '100%'},1000,"jswing");
		})

	} else {

		e.target.classList.remove("active");
		line_toggler[0].removeAttribute("style");
		line_toggler[1].removeAttribute("style");
		line_toggler[2].removeAttribute("style");
		$(document).ready(function() {

			$(".nav-collapse").animate({height: '1%'},1000,"jswing");
			$(".nav-collapse").animate({left: '-300px'},1000,"jswing");
		})		
	}
}

function PAGE_ITEM_1() {

	if(news_content[2].classList.contains("d-none")==true) {

		if(news_content[3].classList.contains("d-none")==true) {

			news_content[2].classList.remove("d-none");
			news_content[3].classList.remove("d-none");			
		}
	}

	news_link[0].setAttribute("href","menghindari_kerusakan_sosial_lebih_di_kedepankan.html");
	section_content[0].innerHTML="menghindari kerusakan sosial lebih di kedepankan";
	img_md[0].setAttribute("src","css/gambar_1.jpg");
	img_lg[0].setAttribute("src","css/gambar_1.jpg");

	news_link[1].setAttribute("href","bernahi_munkar_kepada_yusuf_mansur.html");
	section_content[1].innerHTML="bernahi munkar kepada yusuf mansur";
	img_md[1].setAttribute("src","css/gambar_2.jpg");
	img_lg[1].setAttribute("src","css/gambar_2.jpg");

	news_link[2].setAttribute("href","kali_ini_yusuf_mansyur_tidak_akan_bisa_berkelit_dari_jeratan_hukum.html");
	section_content[2].innerHTML="kali ini yusuf mansyur tidak akan bisa berkelit dari jeratan hukum";
	img_md[2].setAttribute("src","css/gambar_3.jpg");
	img_lg[2].setAttribute("src","css/gambar_3.jpg");

	news_link[3].setAttribute("href","ustadz_tabrani_sabirin:_bisnis_yusuf_mansur_pasti_hancur.html");
	section_content[3].innerHTML="ustadz tabrani sabirin: bisnis yusuf mansur pasti hancur";
	img_md[3].setAttribute("src","css/gambar_4.jpg");
	img_lg[3].setAttribute("src","css/gambar_4.jpg");
}

function PAGE_ITEM_2() {

	if(news_content[2].classList.contains("d-none")==true) {

		if(news_content[3].classList.contains("d-none")==true) {

			news_content[2].classList.remove("d-none");
			news_content[3].classList.remove("d-none");			
		}
	}

	news_link[0].setAttribute("href","akal_-_akalan_yusuf_mansur_mengembalikan_dana_investor.html");
	section_content[0].innerHTML="akal - akalan yusuf mansur mengembalikan dana investor";
	img_md[0].setAttribute("src","css/gambar_5.jpg");
	img_lg[0].setAttribute("src","css/gambar_5.jpg");

	news_link[1].setAttribute("href","uztadz_tabrani_sabirin:_yusuf_mansur_itu_islam_sontoloyo.html");
	section_content[1].innerHTML="uztadz tabrani sabirin: yusuf mansur itu islam sontoloyo";
	img_md[1].setAttribute("src","css/gambar_6.jpg");
	img_lg[1].setAttribute("src","css/gambar_6.jpg");

	news_link[2].setAttribute("href","ustadz_tabrani_sabirin:_yusuf_mansur_sakit_jiwa.html");
	section_content[2].innerHTML="ustadz tabrani sabirin: yusuf mansur sakit jiwa";
	img_md[2].setAttribute("src","css/gambar_7.jpg");
	img_lg[2].setAttribute("src","css/gambar_7.jpg");

	news_link[3].setAttribute("href","ustadz_tabrani_sabirin:_yusuf_mansur_pembohong.html");
	section_content[3].innerHTML="ustadz tabrani sabirin: yusuf mansur pembohong";
	img_md[3].setAttribute("src","css/gambar_8.jpg");
	img_lg[3].setAttribute("src","css/gambar_8.jpg");
}

function PAGE_ITEM_3() {

	if(news_content[2].classList.contains("d-none")==true) {

		if(news_content[3].classList.contains("d-none")==true) {

			news_content[2].classList.remove("d-none");
			news_content[3].classList.remove("d-none");			
		}
	}

	news_link[0].setAttribute("href","bersedekah_kok_bangkrut.html");
	section_content[0].innerHTML="bersedekah kok bangkrut";
	img_md[0].setAttribute("src","css/gambar_9.jpg");
	img_lg[0].setAttribute("src","css/gambar_9.jpg");

	news_link[1].setAttribute("href","combe_-_combe_yusuf_mansur.html");
	section_content[1].innerHTML="combe - combe yusuf mansur";
	img_md[1].setAttribute("src","css/gambar_10.jpg");
	img_lg[1].setAttribute("src","css/gambar_10.jpg");

	news_link[2].setAttribute("href","puspo_wardoyo_tantang_yusuf_mansur_buka_data_ke_publik.html");
	section_content[2].innerHTML="puspo wardoyo tantang yusuf mansur buka data ke publik";
	img_md[2].setAttribute("src","css/gambar_11.jpg");
	img_lg[2].setAttribute("src","css/gambar_11.jpg");

	news_link[3].setAttribute("href","yusuf_mansur,_kembalikan_dana_investor_?.html");
	section_content[3].innerHTML="yusuf mansur, kembalikan dana investor ?";
	img_md[3].setAttribute("src","css/gambar_12.jpg");
	img_lg[3].setAttribute("src","css/gambar_12.jpg");
}

function PAGE_ITEM_4() {

	news_link[0].setAttribute("href","berapa_yusuf_mansur_harus_mengembalikan_dana_investor_?.html");
	section_content[0].innerHTML="berapa yusuf mansur harus mengembalikan dana investor ?";
	img_md[0].setAttribute("src","css/gambar_13.jpg");
	img_lg[0].setAttribute("src","css/gambar_13.jpg");

	news_link[1].setAttribute("href","membicarakan_yusuf_mansur,_bukan_ghibah.html");
	section_content[1].innerHTML="membicarakan yusuf mansur, bukan ghibah";
	img_md[1].setAttribute("src","css/gambar_14.jpg");
	img_lg[1].setAttribute("src","css/gambar_14.jpg");

	news_content[2].classList.add("d-none");
	news_content[3].classList.add("d-none");
}

function PAGINATION_CLICK (e) {

	if(e.target.innerHTML=="1") {

		if(page_item[1].classList.contains("active")==false) {

			page_item[1].classList.add("active");
			pagination_active.classList.remove("active");
			pagination_active=page_item[1];

			if(page_item[0].classList.contains("d-none")==false) {

				page_item[0].classList.add("d-none");

				if(page_item[5].classList.contains("d-none")==true) {

					page_item[5].classList.remove("d-none");
				}
			} 
		}

		PAGE_ITEM_1();

	} else if (e.target.innerHTML=="2") {

		if(page_item[2].classList.contains("active")==false) {

			page_item[2].classList.add("active");
			pagination_active.classList.remove("active");
			pagination_active=page_item[2];
			page_item[0].classList.remove("d-none");

			if(page_item[5].classList.contains("d-none")==true) {

				page_item[5].classList.remove("d-none");
			}
		}		

		PAGE_ITEM_2();

	} else if (e.target.innerHTML=="3") {

		if(page_item[3].classList.contains("active")==false) {

			page_item[3].classList.add("active");
			pagination_active.classList.remove("active");
			pagination_active=page_item[3]		
			page_item[0].classList.remove("d-none");

				if(page_item[4].classList.contains("d-none")==true) {

					page_item[5].classList.add("d-none");
				}
		}		

		PAGE_ITEM_3();

	} else if (e.target.innerHTML=="4") {

		if(page_item[1].classList.contains("active")==false) {

			page_item[1].classList.add("active");
			pagination_active.classList.remove("active");
			pagination_active=page_item[1];

			if(page_item[5].classList.contains("d-none")==true) {

				page_item[5].classList.remove("d-none");
			}			
		}		

		PAGE_ITEM_4();

	} else if (e.target.innerHTML=="...") {

		if(page_item[1].classList.contains("active")==false) {

			page_item[1].classList.add("active");
			pagination_active.classList.remove("active");
			pagination_active=page_item[1];

			if(page_link_top[3].innerHTML=="3") {

				page_link_top[1].innerHTML="4";
				page_item[2].classList.add("d-none");
				page_item[3].classList.add("d-none");
				page_item[4].classList.add("d-none");
				page_item[5].classList.add("d-none");

				PAGE_ITEM_4();
			}

		} else {

			page_item[0].classList.remove("d-none");

			if(page_link_top[3].innerHTML=="3") {

				page_link_top[1].innerHTML="4";
				page_item[2].classList.add("d-none");
				page_item[3].classList.add("d-none");
				page_item[4].classList.add("d-none");
				page_item[5].classList.add("d-none");

				PAGE_ITEM_4();
			}
		}

	} else {

		$(document).ready(function() {

			var raquo=$(".pagination .page-item:last").text().trim();
			var laquo=$(".pagination .page-item:first").text().trim();
			
			if(e.target.innerHTML==raquo) {

				if(page_item[1].classList.contains("active")==true) {

					page_item[2].classList.add("active");
					pagination_active.classList.remove("active");
					pagination_active=page_item[2];
					page_item[0].classList.remove("d-none");

						if(page_link_top[2].innerHTML=="2") {

							PAGE_ITEM_2();

						} else {

							if(page_item[3].classList.contains("d-none")==true) {

								page_item[5].classList.add("d-none");

								if(page_link_top[2].innerHTML=="5") {

									PAGE_ITEM_5();
								}

							} else {

								if(page_link_top[2].innerHTML=="5") {

									PAGE_ITEM_5();
								}								
							}
						}

				} else if (page_item[2].classList.contains("active")==true) {

					page_item[3].classList.add("active");
					pagination_active.classList.remove("active");
					pagination_active=page_item[3];

						if(page_item[4].classList.contains("d-none")==true) {

							page_item[5].classList.add("d-none");

								if(page_link_top[3].innerHTML=="3") {

									PAGE_ITEM_3();

								} else {

									if(page_link_top[3].innerHTML=="6") {

										PAGE_ITEM_6();
									}
								}

						} else {

							if(page_link_top[3].innerHTML=="3") {

								PAGE_ITEM_3();

							} else {

								if(page_link_top[3].innerHTML=="6") {

									PAGE_ITEM_6();
								}
							}
						}

				} else {

					if (page_item[3].classList.contains("active")==true) {

						page_item[1].classList.add("active");
						pagination_active.classList.remove("active");
						pagination_active=page_item[1];

							if(page_link_top[3].innerHTML=="3") {

								page_link_top[1].innerHTML="4";
								page_item[2].classList.add("d-none");
								page_item[3].classList.add("d-none");
								page_item[4].classList.add("d-none");
								page_item[5].classList.add("d-none");

								PAGE_ITEM_4();
							}										
					}
				}	

			} else {

				if(e.target.innerHTML==laquo) {

					if(page_item[3].classList.contains("active")==true) {

						page_item[2].classList.add("active");
						pagination_active.classList.remove("active");
						pagination_active=page_item[2];
						page_item[5].classList.remove("d-none");

							if(page_link_top[2].innerHTML=="2") {

								PAGE_ITEM_2();

							} else {

								if(page_link_top[2].innerHTML=="5") {

									PAGE_ITEM_5();
								}
							}

					} else if (page_item[2].classList.contains("active")==true) {

						page_item[1].classList.add("active");
						pagination_active.classList.remove("active");
						pagination_active=page_item[1];						
						page_item[5].classList.remove("d-none");

							if(page_link_top[1].innerHTML=="1") {

								page_item[0].classList.add("d-none");
								PAGE_ITEM_1();

							} else {

								if(page_link_top[1].innerHTML=="4") {

									PAGE_ITEM_4();
								}
							}

					} else {

						if (page_item[1].classList.contains("active")==true) {

							page_item[3].classList.add("active");
							pagination_active.classList.remove("active");
							pagination_active=page_item[3];							

								if(page_link_top[1].innerHTML=="4") {

									page_link_top[1].innerHTML="1";
									page_item[2].classList.remove("d-none");
									page_item[3].classList.remove("d-none");
									page_item[4].classList.remove("d-none");
									page_item[5].classList.remove("d-none");

									PAGE_ITEM_3();
								}
						}
					}								
				}
			}
		})
	}
}

function IMG_NEWS_OVER(e) {

	for(var i=0; i<img_lg.length; i++) {

		VanillaTilt.init(img_lg[i],{max: 10,speed: 250});
	}
}

var nav_text=document.querySelectorAll(".navbar-nav .nav-item");

	for(var i=0; i<nav_text.length; i++) {

		nav_text[i].addEventListener("mouseover",MOUSEOVER_NAVBAR);
	}

	for(var i=0; i<nav_text.length; i++) {

		nav_text[i].addEventListener("mouseout",MOUSEOUT_NAVBAR);
	}

var button_toggler=document.querySelector(".navbar-expand-lg .button-toggler");
button_toggler.addEventListener("click",BUTTON_TOGGLER);

var page_item=document.querySelectorAll(".pagination .page-item");

	for(var i=0; i<page_item.length; i++) {

		page_item[i].addEventListener("click",PAGINATION_CLICK);

		if(page_item[i].classList.contains("active")==true) {

			pagination_active=page_item[i];
		}
	}

for(var i=0; i<news_link.length; i++) {

	news_link[i].addEventListener("mouseover",IMG_NEWS_OVER);
}
