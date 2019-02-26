let pro_skill =`<div class="graphic1">
						<svg width="100%" height="100%" viewBox="0 0 100 100" class="donut">
							<circle class="donut-hole" cx="50" cy="50" r="47" fill="#4A0F73"></circle>
							<circle class="donut-ring" cx="50" cy="50" r="47" fill="transparent" stroke="#FFFFFF" stroke-width="4"></circle>

							<circle class="donut-segment" cx="50" cy="50" r="47" fill="transparent" stroke="#F64C71" stroke-width="4" stroke-dasharray="297" stroke-dashoffset="104"></circle>
							<text fill="#ffffff"
								  x="40" y="55">65%
							</text>
							<p>OTHER</p>
						</svg>
					</div>`

let person_skill = `<div class="person-skill">
						<h4>Other skill</h4>
						<div class="all">
							<div class="percent percent-1">
							</div>
							<p class="percent-text-1">65%</p>
						</div>
					</div>`
let experience = `<div class="d-flex flex-row experience">
						<div class="align-self-center">
							<img src="images/Polygon.png">
						</div>
						<div class="line-doted align-self-center">
						</div>
						<div class="w-e-content p-2">
							<p class="font-medium">(<u>2010 - 2019</u>) ABC COMPANY</p>
							<p>Developer</p>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
						</div>
					</div>
					<div class="experience" style="height: 30px;"></div>`;

let slide = `<div class="slide text-justify justify-content-center">
			<div class="d-flex justify-content-center">
				<img src="images/girl.png" alt="ava_girl">
			</div>
			<div class="quote d-flex flex-row">
				<div class="quote-1-1">
					<span class="quote-1">“</span><span class="p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in</span>
					<span class="quote-2">”</span>
				</div>
			</div>
		</div>`

let ft1 =`<div class="d-flex project_name bg_or justify-content-center align-items-center">
						<img src="images/1111.png" alt="">
					</div>`

let ft2 = `<div class="d-flex project_name bg_dark justify-content-center align-items-center">
						<img src="images/1111.png" alt="">
					</div>`

let ft3 = `<div class="d-flex project_name_2 bg_yel justify-content-center align-items-center">
						<img src="images/2222.png" alt="">
					</div>`

let ft4 =`<div class="d-flex project_name bg_blue justify-content-center align-items-center">
						<img src="images/1111.png" alt="">
					</div>`

let ft5 = `<div class="d-flex project_name_2 bg_red_or justify-content-center align-items-center">
						<img src="images/1111.png" alt="">
					</div>`

let ft6 = `<div class="d-flex project_name bg_red justify-content-center align-items-center">
						<img src="images/1111.png" alt="">
					</div>`

let ft7 = `<div class="d-flex project_name bg_yel2 justify-content-center align-items-center">
						<img src="images/2222.png" alt="">
					</div>`

$(document).ready(function(){

    // add Experience
    for (let i=0; i<4; i++){
        $("#add-ex-1").before(experience)
        $("#add-ex-2").before(experience)

    };
    // add Experience when click "Add Experience"
    $("#add-ex-1").click(function () {
        $("#add-ex-1").before(experience)
    });

    $(".work-add-botton2").click(function () {
        $("#add-ex-1").before(experience)
    });

    $("#add-ex-2").click(function () {
        $("#add-ex-2").before(experience)
    });
    $(".edu-add-botton2").click(function () {
        $("#add-ex-2").before(experience)
    });

    // add professional skill when click button "Add Skill"
    $("#btn-3").click(function () {
        $("#last_pro_skill").before(pro_skill)
    });
    $("#btn-3-2").click(function () {
        $("#last_pro_skill").before(pro_skill)
    });

    // add personal skill when click button "Add Skill"

    $("#btn-4").click(function () {
        $("#last-personal-skill").before(person_skill)
    });
    $("#btn-4-2").click(function () {
        $("#last-personal-skill").before(person_skill)
    });
    
    //Add project on PC
    var j=0;
    $("#btn6").click(function(){
        j++;
        $("#portfolio").ready(function(){
            if (j%10==1) {
                $("#col_1").append(ft1);
            };

            if (j%10==2) {
                $("#col_2").append(ft2);
            };

            if (j%10==3) {
                $("#add_project").before(ft4);
            };

            if (j%10==4) {
                $("#col_1").append(ft6);
            };

            if (j%10==5) {
                $("#col_2").append(ft3);
            };

            if (j%10==6) {
                $("#col_3").append(ft7);
            };

            if (j%10==7) {
                $("#add_project").before(ft1);
            };

            if (j%10==8) {
                $("#col_1").append(ft2);
            };

            if (j%10==9) {
                $("#col_3").append(ft5);
            };

            if (j%10==0) {
                $("#add_project").before(ft2);
            };
        });
    });
    
    //Add project on Mobile

    for (let i=0; i<4;i++){
        if (i==0) {
            $(".project_left").append(ft1);
            $(".project_right").append(ft5);

        };
        if (i==1) {
            $(".project_left").append(ft2);
            $(".project_right").append(ft6);
        }
        if (i==2) {
            $(".project_left").append(ft3);
            $(".project_right").append(ft7);
        }
        if (i==3) {
            $(".project_left").append(ft4);
            $(".project_right").append(ft1);
        }
    }

    var k =0;
    $("#btn-7").click(function () {
        k++;
        if(k%8==1){
            $(".project_left").append(ft1);
        }if(k%8==2){
            $(".project_right").append(ft5);
        }if(k%8==3){
            $(".project_left").append(ft2);
        }if(k%8==4){
            $(".project_right").append(ft6);
        }if(k%8==5){
            $(".project_left").append(ft3);
        }if(k%8==6){
            $(".project_right").append(ft7);
        }if(k%8==7){
            $(".project_left").append(ft4);
        }if(k%8==0){
            $(".project_right").append(ft1);
        }
    })
    
    //Slide
    for(let i=0; i<3; i++){
        $(".slick_slide").append(slide)
    }


    $(".slick_slide").slick( {
        dots: true,
        // infinite: true,
        slidesToShow: 1,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
    });
    var l=0
    $("#btn-8").click(function () {
        l++;
        $(".slick_slide").slick('unslick');
            $(".slick_slide").empty();
        for(let i=0; i<l+3; i++){
            $(".slick_slide").append(slide)
        }
        $(".slick_slide").slick( {
            dots: true,
            slidesToShow: 1,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            slidesToScroll: 1,
        });
    })

});