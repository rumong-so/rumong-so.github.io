
var line_navbar=document.querySelectorAll(".nav-item .line-navbar-menu");
var line_toggler=document.querySelectorAll(".button-toggler .line-toggler");
var page_link_top=document.querySelectorAll(".pagination-top .text-dark");
var title_content=document.querySelectorAll("div.news-top");
var img_content_md=document.querySelectorAll("div.news-middle img.d-lg-none");
var img_content_lg=document.querySelectorAll("div.news-middle img.d-lg-inline");
var section_content=document.querySelectorAll("div.news-bottom");
var news_content=document.querySelectorAll(".news-content");
var news_link=document.querySelectorAll("a.news-link");
var name_menu,toggler_active,pagination_active,fade_right_300;

fade_right_300=document.querySelectorAll(".fade-right-300");
	
	for(var i=0; i<fade_right_300.length; i++) {

		fade_right_300[i].dataset.aos="fade-right";
		fade_right_300[i].dataset.aosDuration="1000";
		fade_right_300[i].dataset.aosDelay="300";
	}

$(document).ready(function() {

	$("[src='pictures/logo_rumongso1.png']").animate({opacity: '1',bottom: '0px'},700,"jswing");
	$(".navbar-expand .nav-item").animate({opacity: '1',top: '3px'},700,"jswing");
	$(".button-toggler").animate({opacity: '1',bottom: '0px'},700,"jswing");
	$(".news-link").animate({opacity:'1',right:'0px'},800,"jswing");
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

	var section_content_1a,section_content_1b,section_content_1c,section_content_1d,section_content_1e;
		var section_content_2a,section_content_2b,section_content_2c,section_content_2d,section_content_2e;
		var section_content_3a,section_content_3b,section_content_3c,section_content_3d,section_content_3e;
	var section_content_4a,section_content_4b,section_content_4c,section_content_4d,section_content_4e;

		if(news_content[3].classList.contains("d-none")==true) {

			news_content[3].classList.remove("d-none");
		}

	news_link[0].setAttribute("href","hoaks.html");
	title_content[0].innerHTML="hoaks";
	img_content_md[0].setAttribute("src","pictures/gambar_15.jpg");
	img_content_lg[0].setAttribute("src","pictures/gambar_15.jpg");
	section_content_1a="Hoaks adalah berita atau informasi yang tidak benar yang beredar di tengah-tengah masyarakat. Pada awal bulan Oktober 2018, pekerja seni ";
	section_content_1b="panggung, Ratna Sarumpaet, mengaku dianiaya orang di Bandung, Jawa Barat. Simpati datang kepadanya. Sementara hujatan dan makian dialamatkan ";
	section_content_1c="orang kepada si penganiaya. Ruapanya, si Ratna \"khilaf\", bahwa apa yang dia omongkan itu bukan di panggung...";
	section_content[0].innerHTML=`${section_content_1a} ${section_content_1b} ${section_content_1c}`;		

	news_link[1].setAttribute("href","menghindari_kerusakan_sosial_lebih_di_kedepankan.html");
	title_content[1].innerHTML="menghindari kerusakan sosial lebih di kedepankan";
	img_content_md[1].setAttribute("src","pictures/gambar_1.jpg");
	img_content_lg[1].setAttribute("src","pictures/gambar_1.jpg");
	section_content_2a="Dalam perjuangan menegakkan Amar Makruf Nahyi Munkar, seringkali kita menghadapi dilemma. Yaitu saat kita dapati bahwa yang berbuat aib,";
	section_content_2b="kedhaliman, kemunkaran, dan kemunafikan, itu adalah orang terdekat kita, saudara kita, baik saudara sedarah maupun seiman. Dilemma antara, ";
	section_content_2c="apakah kita wajib menutupinya, mengingat sabda Nabi saw, مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ“ \" Barang Siapa menutupi...";
	section_content[1].innerHTML=`${section_content_2a} ${section_content_2b} ${section_content_2c}`;

	news_link[2].setAttribute("href","bernahi_munkar_kepada_yusuf_mansur.html");
	title_content[2].innerHTML="bernahi munkar kepada yusuf mansur";
	img_content_md[2].setAttribute("src","pictures/gambar_2.jpg");
	img_content_lg[2].setAttribute("src","pictures/gambar_2.jpg");
	section_content_3a="Akhir-akhir ini, pencermah Jam’an Nurchotib Mansur yang popular dipanggil Yusuf Mansur, mengalami banyak hujatan dan gugatan. Hujatan dari ";
	section_content_3b="berbagai pihak lewat channel youtube, berita di media (online, koran, dan televisi), serta gugatan melalui pengadilan. Banyaknya hujatan dan ";
	section_content_3c="gugatan itu adalah tindak lanjut dari pelaksanaan amar ma’ruf nahi mungkar yang tidak ditanggapi secara serus oleh Jam’an...";
	section_content[2].innerHTML=`${section_content_3a} ${section_content_3b} ${section_content_3c}`;

	news_link[3].setAttribute("href","kali_ini_yusuf_mansyur_tidak_akan_bisa_berkelit_dari_jeratan_hukum.html");
	title_content[3].innerHTML="kali ini yusuf mansyur tidak akan bisa berkelit dari jeratan hukum";
	img_content_md[3].setAttribute("src","pictures/gambar_3.jpg");
	img_content_lg[3].setAttribute("src","pictures/gambar_3.jpg");
	section_content[3].innerHTML="";

}

function PAGE_ITEM_2() {

	var section_content_1a,section_content_1b,section_content_1c,section_content_1d,section_content_1e;
		var section_content_2a,section_content_2b,section_content_2c,section_content_2d,section_content_2e;
		var section_content_3a,section_content_3b,section_content_3c,section_content_3d,section_content_3e;
	var section_content_4a,section_content_4b,section_content_4c,section_content_4d,section_content_4e;

		if(news_content[3].classList.contains("d-none")==true) {

			news_content[3].classList.remove("d-none");
		}

	news_link[0].setAttribute("href","ustadz_tabrani_sabirin:_bisnis_yusuf_mansur_pasti_hancur.html");
	title_content[0].innerHTML="ustadz tabrani sabirin: bisnis yusuf mansur pasti hancur";
	img_content_md[0].setAttribute("src","pictures/gambar_4.jpg");
	img_content_lg[0].setAttribute("src","pictures/gambar_4.jpg");
	section_content[0].innerHTML="";

	news_link[1].setAttribute("href","akal_-_akalan_yusuf_mansur_mengembalikan_dana_investor.html");
	title_content[1].innerHTML="akal - akalan yusuf mansur mengembalikan dana investor";
	img_content_md[1].setAttribute("src","pictures/gambar_5.jpg");
	img_content_lg[1].setAttribute("src","pictures/gambar_5.jpg");
	section_content_2a="Melalui sebuah Channel Youtube, tiga hari lalu, seorang yang mengaku Bernama Mokhammad Sholeh Bakhri, warga Mojokerto, JawaTimur, membuat ";
	section_content_2b="testimoni. Bahwa dirinya, pada tahun 2012 ikut Patungan Usaha dan Patungan Aset yang diinisiasi oleh Yusuf Mansur. Total invetasi yang ia ";
	section_content_2c="tanam sebesar Rp14 juta. Desember lalu, Sholeh menghubungi Rofii yang katanya bisa menghubungkan ke Yusuf Mansur...";
	section_content[1].innerHTML=`${section_content_2a} ${section_content_2b} ${section_content_2c}`;	

	news_link[2].setAttribute("href","uztadz_tabrani_sabirin:_yusuf_mansur_itu_islam_sontoloyo.html");
	title_content[2].innerHTML="uztadz tabrani sabirin: yusuf mansur itu islam sontoloyo";
	img_content_md[2].setAttribute("src","pictures/gambar_6.jpg");
	img_content_lg[2].setAttribute("src","pictures/gambar_6.jpg");
	section_content[2].innerHTML="";

	news_link[3].setAttribute("href","ustadz_tabrani_sabirin:_yusuf_mansur_sakit_jiwa.html");
	title_content[3].innerHTML="ustadz tabrani sabirin: yusuf mansur sakit jiwa";
	img_content_md[3].setAttribute("src","pictures/gambar_7.jpg");
	img_content_lg[3].setAttribute("src","pictures/gambar_7.jpg");
	section_content[3].innerHTML="";

}

function PAGE_ITEM_3() {

	var section_content_1a,section_content_1b,section_content_1c,section_content_1d,section_content_1e;
		var section_content_2a,section_content_2b,section_content_2c,section_content_2d,section_content_2e;
		var section_content_3a,section_content_3b,section_content_3c,section_content_3d,section_content_3e;
	var section_content_4a,section_content_4b,section_content_4c,section_content_4d,section_content_4e;

		if(news_content[3].classList.contains("d-none")==true) {

			news_content[3].classList.remove("d-none");
		}

	news_link[0].setAttribute("href","ustadz_tabrani_sabirin:_yusuf_mansur_pembohong.html");
	title_content[0].innerHTML="ustadz tabrani sabirin: yusuf mansur pembohong";
	img_content_md[0].setAttribute("src","pictures/gambar_8.jpg");
	img_content_lg[0].setAttribute("src","pictures/gambar_8.jpg");
	section_content[0].innerHTML="";

	news_link[1].setAttribute("href","bersedekah_kok_bangkrut.html");
	title_content[1].innerHTML="bersedekah kok bangkrut";
	img_content_md[1].setAttribute("src","pictures/gambar_9.jpg");
	img_content_lg[1].setAttribute("src","pictures/gambar_9.jpg");
	section_content[1].innerHTML="";

	news_link[2].setAttribute("href","combe_-_combe_yusuf_mansur.html");
	title_content[2].innerHTML="combe - combe yusuf mansur";
	img_content_md[2].setAttribute("src","pictures/gambar_10.jpg");
	img_content_lg[2].setAttribute("src","pictures/gambar_10.jpg");
	section_content[2].innerHTML="";

	news_link[3].setAttribute("href","puspo_wardoyo_tantang_yusuf_mansur_buka_data_ke_publik.html");
	title_content[3].innerHTML="puspo wardoyo tantang yusuf mansur buka data ke publik";
	img_content_md[3].setAttribute("src","pictures/gambar_11.jpg");
	img_content_lg[3].setAttribute("src","pictures/gambar_11.jpg");
	section_content_4a="Di acara Hotman Paris Show yang ditayangkan oleh stasiun televisi, Yusuf Mansur membawa setumpuk “barang bukti” bahwa dia telah mengembalikan ";
	section_content_4b="investasi 2500 orang yang ikut Patungan Usaha. Beberapa hari lalu juga muncul video bahwa Yusuf Mansur menunjukkan “barang bukti” tersebut dan ";
	section_content_4c="disiarkan oleh Daqu Channel miliknya. Menurut Yusuf Mansur, peserta Patungan Usaha berjumlah 2900 orang,...";
	section_content[3].innerHTML=`${section_content_4a} ${section_content_4b} ${section_content_4c}`;	

}

function PAGE_ITEM_4() {

	var section_content_1a,section_content_1b,section_content_1c,section_content_1d,section_content_1e;
		var section_content_2a,section_content_2b,section_content_2c,section_content_2d,section_content_2e;
		var section_content_3a,section_content_3b,section_content_3c,section_content_3d,section_content_3e;
	var section_content_4a,section_content_4b,section_content_4c,section_content_4d,section_content_4e;

	news_link[0].setAttribute("href","yusuf_mansur,_kembalikan_dana_investor_?.html");
	title_content[0].innerHTML="yusuf mansur, kembalikan dana investor ?";
	img_content_md[0].setAttribute("src","pictures/gambar_12.jpg");
	img_content_lg[0].setAttribute("src","pictures/gambar_12.jpg");
	section_content_1a="Beredar video pendek berdurasi 45 detik dari Channel Daqu, bahwa Yusuf Mansur menunjukkan setumpuk dokumen yang katanya itulah bukti bahwa ";
	section_content_1b="ia telah mengembalikan uang para investor Patungan Usaha, sejak 2012 sampai 2021. Menurut Yusuf Mansur, sepanjang 2012 – 2021, dia telah ";
	section_content_1c="mengembalikan dana Patungan Usaha kepada 2500 orang. Sebagaimana pengakuan Yusuf Mansur sendiri, dari 2900...";
	section_content[0].innerHTML=`${section_content_1a} ${section_content_1b} ${section_content_1c}`;

	news_link[1].setAttribute("href","berapa_yusuf_mansur_harus_mengembalikan_dana_investor_?.html");
	title_content[1].innerHTML="berapa yusuf mansur harus mengembalikan dana investor ?";
	img_content_md[1].setAttribute("src","pictures/gambar_13.jpg");
	img_content_lg[1].setAttribute("src","pictures/gambar_13.jpg");
	section_content[1].innerHTML="";

	news_link[2].setAttribute("href","membicarakan_yusuf_mansur,_bukan_ghibah.html");
	title_content[2].innerHTML="membicarakan yusuf mansur, bukan ghibah";
	img_content_md[2].setAttribute("src","pictures/gambar_14.jpg");
	img_content_lg[2].setAttribute("src","pictures/gambar_14.jpg");
	section_content[2].innerHTML="";

	news_content[3].classList.add("d-none");
}

function PAGE_ITEM_5() {

	news_link[0].setAttribute("href","hoaks.html");
	title_content[0].innerHTML="hoaks";
	img_content_md[0].setAttribute("src","pictures/gambar_15.jpg");
	img_content_lg[0].setAttribute("src","pictures/gambar_15.jpg");
	section_content_1a="Hoaks adalah berita atau informasi yang tidak benar yang beredar di tengah-tengah masyarakat. Pada awal bulan Oktober 2018, pekerja seni ";
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

	} else if (e.target.innerHTML=="5") {

		if(page_item[2].classList.contains("active")==false) {

			page_item[2].classList.add("active");
			pagination_active.classList.remove("active");
			pagination_active=page_item[2];

			if(page_item[3].classList.contains("d-none")==true) {

				page_item[5].classList.add("d-none");
			}		
		}		

		PAGE_ITEM_5();		

	} else if (e.target.innerHTML=="...") {

		if(page_item[1].classList.contains("active")==false) {

			page_item[1].classList.add("active");
			pagination_active.classList.remove("active");
			pagination_active=page_item[1];

			if(page_link_top[3].innerHTML=="3") {

				page_link_top[1].innerHTML="4";
				// page_link_top[2].innerHTML="5";
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
				// page_link_top[2].innerHTML="5";
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
								// page_link_top[2].innerHTML="5";
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
									// page_link_top[2].innerHTML="2";
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

	for(var i=0; i<img_content_lg.length; i++) {

		VanillaTilt.init(img_content_lg[i],{max: 10,speed: 250});
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
