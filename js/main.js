$(document).ready(function(){
	console.log("Opacity splash" + $("#bgGaruda").css("opacity"));
	redirect(2,"#bgGaruda");
	if ($("#popup").css("display") != "none"){
		$("#popup").css("display", "none");
	}
	
	$("#tentang").on('click', function (){
		$("#divPopContent").css("height", "50%");
		$('#judulPop').text("Tentang");
		var obj = "Makna sila dan lambang dalam pancasila.\n\nVersi 1.0.0 \n" + "By: Hendriyan Ogivano" + "";
		
		$('#isiPop').text(obj);
		$('#popup').fadeIn();
	})
	
	$(".btnPopKeluar").on('click', function (){
		console.log("BtnPOP " + $("#popKeluar").css("display") );
		if ($(this).attr("id") == "ya"){
			try {
		        tizen.application.getCurrentApplication().exit();
		    } catch (ignore) {
		    	
		    }
		} else {
			$("#popKeluar").slideUp("fast");
			$(".btn").removeAttr("disabled");
			setTimeout(function (){
				$("#popKeluar").css("display", "none");
			}, 500);
			console.log("BtnPOPUp " + $("#popKeluar").css("display"));
		}
	})
	
	$("#gambarLambang").on ('click', function (){
		var src = $("#gambarLambang").attr("src");
		
		if (src == "./images/bintang-emas.png"){
			console.log("ketekan");
			$('#judulPop').text("Bintang Emas");
			$('#isiPop').text("Bintang Emas diartikan sebagai sebuah cahaya seperti layaknya Tuhan yang menjadi cahaya kerohanian bagi setiap manusia.");
			$('#popup').fadeIn();
		} else if (src == "./images/rantai-emas.png"){
			$('#judulPop').text("Rantai Emas");
			$('#isiPop').text("Rantai yang disusun atas gelang-gelang kecil menandakan hubungan antar manusia yang saling membantu, gelang yang berbentuk persegi melambangkan pria sedangkan lingkaran menggambarkan wanita.");
			$('#popup').fadeIn();
		} else if (src == "./images/pohon-beringin.png"){
			$('#judulPop').text("Pohon Beringin");
			$('#isiPop').text("Pohon Beringin merupakan pohon yang besar dan memiliki akar yang menggelantung dari rantingnya, hal tersebut melambangkan kesatuan dan persatuan Indonesia yang memiliki latar belakang (agama, ras, suku, dan budaya) yang berbeda-beda.");
			$('#popup').fadeIn();
		} else if (src == "./images/kepala-banteng.png"){
			$('#judulPop').text("Kepala Banteng");
			$('#isiPop').text("Banteng merupakan binatang sosial yang suka berkumpul, sama halnya dengan manusia adalah makhluk sosial yang dalam mengambil keputusan harus secara musyawarah dengan cara berkumpul untuk mendiskusikan sesuatu.");
			$('#popup').fadeIn();
		} else if (src == "./images/padi-dan-kapas.png"){
			$('#judulPop').text("Padi Dan Kapas");
			$('#isiPop').text("Kapas dan padi menggambarkan pangan dan sandang yang merupakan kebutuhan pokok masyarakat Indonesia tanpa terkecuali. Hal ini mencermikan persamaan sosial dimana tidak adanya kesenjangan sosial antar masyarakat.");
			$('#popup').fadeIn();
		}
	})
	
	blinkLambang();
	
})

function popKeluar(){
	$("#popKeluar").slideDown();
	$(".btn").attr("disabled", "true");
}

function keluar (){
	popKeluar();
	/*try {
        tizen.application.getCurrentApplication().exit();
    } catch (ignore) {
    	
    }*/
}

function blinkLambang(){
	setInterval(function (){
		$("#gambarLambang").fadeOut(800);
		$("#gambarLambang").fadeIn(800);
	}, 2000)
}

function clickContent(){
	console.log("hiehie " + $("#popup").css("display"));
	console.log("hiehie Main" + $("#judul").css("display"));
	$("#popup").fadeOut();
	console.log("popup" + $("#popup").css("display"));
	setTimeout( function (){
		$("#divPopContent").css("height", "55%");
		$("#popup").css("display", "none");
	}, 800);
}

	
function redirect(waktu, url){
	var interval = setInterval(function(){
		waktu--;
		if(waktu == 0){
			clearInterval(interval);
			/*$("#splaceScreen").css("display", "none");*/
			$(url).fadeTo("medium", "0.3");
			$("#bgMerah").fadeIn(800);
			
			animasiMain();
			/*$("#main").css("display", "block");*/
			
			/*$("#main").fadeIn("slow");*/
		}
	}, 1000);
}

function animasiMain (){
	$("#main").delay(1000).css("display", "block");	
	/*$("#header").slideDown("slow");*/
	$("#keluar").slideDown("slow");
	$("#tentang").slideDown("slow");
	$("#iconKeluar").slideDown("slow");
	$("#iconTentang").slideDown("slow");
	$("#judul").slideDown("slow");
	/*$("#test").slideDown("slow");*/
	$("#divSila1").slideDown(1000);
	$("#divSila2").slideDown(950);
	$("#divSila3").slideDown(900);
	$("#divSila4").slideDown(800);
	$("#divSila5").slideDown(700);
}

function rest(){
	$("#content").fadeOut();
	$("#kl").fadeOut();
	nonePageMain();
	animasiMain();
	$("#content").delay(1000).fadeOut();
	$("#kl").delay(1000).fadeOut();
	console.log("rest " + $("#content").css("display"))
}

$('.btn').on('click', function(){
	switch ($(this).attr("id")){
		case "sila1":
			transisiOnContent();
			$("#content").delay(300).fadeIn();
			$("#kl").delay(300).fadeIn();
			sila1();
			$("#iframe").attr("src", "./contentSila/silaPertama.html");
			console.log("Lambang " + $("#gambarLambang").css("display"));
			console.log("FadeIn COntent " + $("#content").css("display"));
			break;
		case "sila2":
			transisiOnContent();
			$("#content").delay(300).fadeIn();
			$("#kl").delay(300).fadeIn();
			sila2();
			$("#iframe").attr("src", "./contentSila/silaKedua.html");
			console.log("content " + $("#content").css("display"));
			console.log("main " + $("#main").css("display"));
			break;
		case "sila3":
			transisiOnContent();
			$("#content").delay(300).fadeIn();
			$("#kl").delay(300).fadeIn();
			sila3();
			$("#iframe").attr("src", "./contentSila/silaKetiga.html");
			console.log("content " + $("#content").css("display"));
			console.log("main " + $("#main").css("display"));
			break;
		case "sila4":
			transisiOnContent();
			$("#content").delay(300).fadeIn();
			$("#kl").delay(300).fadeIn();
			sila4();
			$("#iframe").attr("src", "./contentSila/silaKeempat.html");
			console.log("content " + $("#content").css("display"));
			console.log("main " + $("#main").css("display"));
			break;
		case "sila5":
			transisiOnContent();
			$("#content").delay(300).fadeIn();
			$("#kl").delay(300).fadeIn();
			sila5();
			$("#iframe").attr("src", "./contentSila/silaKelima.html");
			console.log("content " + $("#content").css("display"));
			console.log("main " + $("#main").css("display"));
			break;
	}
})

function transisiOnContent (){
	$("#judul").slideUp("slow");
	$("#keluar").slideUp("slow");
	$("#tentang").slideUp("slow");
	$("#iconKeluar").slideUp("slow");
	$("#iconTentang").slideUp("slow");
	$("#divSila1").slideUp("slow");
	$("#divSila2").slideUp("slow");
	$("#divSila3").slideUp("slow");
	$("#divSila4").slideUp("slow");
	$("#divSila5").slideUp("slow");
	//noneMain();
	console.log("tansisionMain" + $("#judul").css("display"));
}

function nonePageMain(){
	$("#main").css("display", "none");	
	$("#judul").delay(200).css("display", "none");
	$("#keluar").delay(200).css("display", "none");
	$("#tentang").delay(200).css("display", "none");
	$("#iconKeluar").delay(200).css("display", "none");
	$("#iconTentang").delay(200).css("display", "none");
	$("#divSila1").delay(200).css("display", "none");
	$("#divSila2").delay(200).css("display", "none");
	$("#divSila3").delay(200).css("display", "none");
	$("#divSila4").delay(200).css("display", "none");
	$("#divSila5").delay(200).css("display", "none");
	console.log("PageMain " + $("#main").css("display"));
}

function sila1(){
	$("#namaLambang").text("BINTANG EMAS");
	$("#gambarLambang").attr("src", "./images/bintang-emas.png");
}

function sila2(){
	$("#namaLambang").text("RANTAI EMAS");
	$("#gambarLambang").attr("src", "./images/rantai-emas.png");
}

function sila3(){
	$("#namaLambang").text("POHON BERINGIN");
	$("#gambarLambang").attr("src", "./images/pohon-beringin.png");
}

function sila4(){
	$("#namaLambang").text("KEPALA BANTENG");
	$("#gambarLambang").attr("src", "./images/kepala-banteng.png");
}

function sila5(){
	$("#namaLambang").text("PADI DAN KAPAS");
	$("#gambarLambang").attr("src", "./images/padi-dan-kapas.png");
}

( function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
        	pageid = $("div").attr ("id");
        	pageid = "#" + pageid;
        	
        	if ($("#bgGaruda").css("opacity") == 1){
        		try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                	
                }
                console.log("yoii");
        	}
        	else if ($("#content").css("display") == "table" && $("#judul").css("display") == "none"){
        		if ($("#popup").css("display") != "none"){
        			console.log("popup" + $("#popup").css("display"));
        			clickContent();
        			
        		} else {
        			rest();
        		}
        		console.log("berhasil");
        	} else if ($("#popup").css("display") != "none" && $("#main").css("display") == "block") {
        		clickContent();
        		console.log("berhasillllllllllll");
        		console.log("Opacity splash" + $("#bgGaruda").css("opacity"));
        	} else if ($("#popKeluar").css("display") == "block"){
        		try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                	
                }
                console.log("Horee");
        	} else if ($("#content").css("display") == "none" && $("#main").css("display") == "block") {
        	
    			/*try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                
                }*/
        		keluar();
                console.log("keluardong");
        	}
            /*try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {
            	
            }*/
        }
    });
} () );