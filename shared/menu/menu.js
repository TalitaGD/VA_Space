function initMenu(current = "") {
	var currentActive = "#POP_MENU_BTN_LINK_"  + current.toUpperCase()

	var htmlMenu = `
			<img id="POP_MENU_BG"               src="../shared/menu/images/POP_MENU_BG.png">
			<img id="POP_MENU_AN_BOX"           src="../shared/menu/images/POP_MENU_AN_BOX.png">

			<div class="center" id="POP_MENU_BTN_LINK_HOME" 	data-link-veeva="McCann_BR_pt_MediumVA_V1_01_Capa"> 
				<p> HOME </p>
			</div>

			<div class="center" id="POP_MENU_BTN_LINK_01" 		data-link-veeva="McCann_BR_pt_MediumVA_V1_02_UnidadeA-01"> 
				<p> LINK 1 </p>
			</div>

			<div class="center" id="POP_MENU_BTN_LINK_02" 		data-link-veeva="McCann_BR_pt_MediumVA_V1_05_UnidadeB-01"> 
				<p> LINK 2 </p>
			</div>

			<div class="center" id="POP_MENU_BTN_LINK_03" 		data-link-veeva="McCann_BR_pt_MediumVA_V1_07_UnidadeC-01"> 
				<p> LINK 3 </p>
			</div>

			<div class="center" id="POP_MENU_BTN_LINK_BULA" 	data-link-veeva="McCann_BR_pt_MediumVA_V1_10_Bula" > 
				<p> BULA </p>
			</div>
			
			<img id="POP_MENU_BTN_CLOSE" 		src="../shared/menu/images/POP_MENU_BTN_CLOSE.png">
	`;

	$("#menu").append(htmlMenu);
	console.log(current);
	console.log(currentActive);
	$(currentActive).addClass("active");
}

$(document).ready(function() {
// Timeline Popup MENU
var tl_pop_MENU = new TimelineMax();
tl_pop_MENU.pause()
.from($("#POP_MENU_BG"),                 .3, { css: { display: "none", opacity: 0 } })
.from($("#POP_MENU_AN_BOX"),             .3, { css: { display: "none", opacity: 0, scale: 0, transformOrigin: "top right"} }, "-=.2")
.from($("#POP_MENU_BTN_CLOSE"),          .3, { css: { display: "none", opacity: 0, scale: 0} }, "-=.3")
.from($("#POP_MENU_BTN_LINK_HOME"),      .3, { css: { display: "none", opacity: 0 } }, "-=.2")
.from($("#POP_MENU_BTN_LINK_01"),        .3, { css: { display: "none", opacity: 0 } }, "-=.2")
.from($("#POP_MENU_BTN_LINK_02"),        .3, { css: { display: "none", opacity: 0 } }, "-=.2")
.from($("#POP_MENU_BTN_LINK_03"),        .3, { css: { display: "none", opacity: 0 } }, "-=.2")
.from($("#POP_MENU_BTN_LINK_BULA"),      .3, { css: { display: "none", opacity: 0 } }, "-=.2")


$("#ST_BTN_MENU").on("touchstart", function(){
	tl_pop_MENU.play().timeScale(1);
})
$("#POP_MENU_BTN_CLOSE, #POP_MENU_BG").on("touchstart", function(){
	tl_pop_MENU.reverse().timeScale(2);
})
});
