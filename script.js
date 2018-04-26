/* JavaScript Document */

$(document).ready(function () {
	"use strict";

	// Variables for accordion
	var plus1, plus2, plus3, plus4;
	var minus1, minus2, minus3, minus4;
	var head1, head2, head3, head4;
	var detail1, detail2, detail3, detail4;
	var open1, open2, open3, open4;
	var close1, close2, close3, close4;

	// Create JSON database
	var json = {
		"crayons": [{
			"name": "Blush",
			"container": "cnt-blush",
			"hex": "#DB5079"
		}, {
			"name": "Green Yellow",
			"container": "cnt-green-yellow",
			"hex": "#F1E788"
		}, {
			"name": "Magenta",
			"container": "cnt-magenta",
			"hex": "#F653A6"
		}, {
			"name": "Mango Tango",
			"container": "cnt-mango-tango",
			"hex": "#E77200"
		}, {
			"name": "Fuchsia",
			"container": "cnt-fuchsia",
			"hex": "#C154C1"
		}, {
			"name": "Red",
			"container": "cnt-red",
			"hex": "#ED0A3F"
		}, {
			"name": "Sepia",
			"container": "cnt-sepia",
			"hex": "#9E5B40"
		}, {
			"name": "Red Orange",
			"container": "cnt-red-orange",
			"hex": "#FF681F"
		}, {
			"name": "Orchid",
			"container": "cnt-orchid",
			"hex": "#E29CD2"
		}, {
			"name": "Navy Blue",
			"container": "cnt-navy-blue",
			"hex": "#0066CC"
		}, {
			"name": "Burnt Orange",
			"container": "cnt-burnt-orange",
			"hex": "#FF7F49"
		}, {
			"name": "Raw Sienna",
			"container": "cnt-raw-sienna",
			"hex": "#D27D46"
		}, {
			"name": "Orange",
			"container": "cnt-orange",
			"hex": "#FF8833"
		}, {
			"name": "Peach",
			"container": "cnt-peach",
			"hex": "#FFCBA4"
		}, {
			"name": "Outer Space",
			"container": "cnt-outer-space",
			"hex": "#2D383A"
		}, {
			"name": "Denim",
			"container": "cnt-denim",
			"hex": "#1560BD"
		}, {
			"name": "Carnation Pink",
			"container": "cnt-carnation-pink",
			"hex": "#FFA6C9"
		}, {
			"name": "Wild Watermelon",
			"container": "cnt-wild-watermelon",
			"hex": "#FD5B78"
		}, {
			"name": "Tumbleweed",
			"container": "cnt-tumbleweed",
			"hex": "#DEA681"
		}, {
			"name": "Turquoise Blue",
			"container": "cnt-turquoise-blue",
			"hex": "#6CDAE7"
		}, {
			"name": "Jungle Green",
			"container": "cnt-jungle-green",
			"hex": "#29AB87"
		}, {
			"name": "White",
			"container": "cnt-white",
			"hex": "#FFFFFF"
		}, {
			"name": "Violet Red",
			"container": "cnt-violet-red",
			"hex": "#F7468A"
		}, {
			"name": "Yellow Green",
			"container": "cnt-yellow-green",
			"hex": "#C5E17A"
		}, {
			"name": "Lavender",
			"container": "cnt-lavender",
			"hex": "#FBAED2"
		}, {
			"name": "Cerise",
			"container": "cnt-cerise",
			"hex": "#DB5079"
		}, {
			"name": "Midnight Blue",
			"container": "cnt-midnight-blue",
			"hex": "#00468C"
		}, {
			"name": "Screamin' Green",
			"container": "cnt-screamin-green",
			"hex": "#76FF7A"
		}, {
			"name": "Caribbean Green",
			"container": "cnt-caribbean-green",
			"hex": "#00CC99"
		}, {
			"name": "Razzmatazz",
			"container": "cnt-razzmatazz",
			"hex": "#E30B5C"
		}, {
			"name": "Robin's Egg Blue",
			"container": "cnt-robin-egg-blue",
			"hex": "#00CCCC"
		}, {
			"name": "Granny Smith Apple",
			"container": "cnt-granny-smith-apple",
			"hex": "#9DE093"
		}, {
			"name": "Canary",
			"container": "cnt-canary",
			"hex": "#FFFF99"
		}, {
			"name": "Forest Green",
			"container": "cnt-forest-green",
			"hex": "#5FA777"
		}, {
			"name": "Blue Green",
			"container": "cnt-blue-green",
			"hex": "#0095B7"
		}, {
			"name": "Shocking Pink",
			"container": "cnt-shocking-pink",
			"hex": "#FB7EFD"
		}, {
			"name": "Sky Blue",
			"container": "cnt-sky-blue",
			"hex": "#76D7EA"
		}, {
			"name": "Red Violet",
			"container": "cnt-red-violet",
			"hex": "#BB3385"
		}, {
			"name": "Melon",
			"container": "cnt-melon",
			"hex": "#FEBAAD"
		}, {
			"name": "Timberwolf",
			"container": "cnt-timberwolf",
			"hex": "#D9D6CF"
		}, {
			"name": "Fuzzy Wuzzy",
			"container": "cnt-fuzzy-wuzzy",
			"hex": "#87421F"
		}, {
			"name": "Cotton Candy",
			"container": "cnt-cotton-candy",
			"hex": "#FFB7D5"
		}, {
			"name": "Banana Mania",
			"container": "cnt-banana-mania",
			"hex": "#FBE7B2"
		}, {
			"name": "Purple Mountains' Majesty",
			"container": "cnt-purple-mountain-majesty",
			"hex": "#9D81BA"
		}, {
			"name": "Tickle Me Pink",
			"container": "cnt-tickle-me-pink",
			"hex": "#FC80A5"
		}, {
			"name": "Apricot",
			"container": "cnt-apricot",
			"hex": "#FDD5B1"
		}, {
			"name": "Blue",
			"container": "cnt-blue",
			"hex": "#0066FF"
		}, {
			"name": "Burnt Sienna",
			"container": "cnt-burnt-sienna",
			"hex": "#E97451"
		}, {
			"name": "Olive Green",
			"container": "cnt-olive-green",
			"hex": "#B5B35C"
		}, {
			"name": "Cadet Blue",
			"container": "cnt-cadet-blue",
			"hex": "#A9B2C3"
		}, {
			"name": "Pig Pink",
			"container": "cnt-pig-pink",
			"hex": "#FDD7E4"
		}, {
			"name": "Pacific Blue",
			"container": "cnt-pacific-blue",
			"hex": "#009DC4"
		}, {
			"name": "Hot Magenta",
			"container": "cnt-hot-magenta",
			"hex": "#FF1DCE"
		}, {
			"name": "Tropical Rain Forest",
			"container": "cnt-tropical-rain-forest",
			"hex": "#00755E"
		}, {
			"name": "Sunset Orange",
			"container": "cnt-sunset-orange",
			"hex": "#FE4C40"
		}, {
			"name": "Inchworm",
			"container": "cnt-inchworm",
			"hex": "#AFE313"
		}, {
			"name": "Asparagus",
			"container": "cnt-asparagus",
			"hex": "#7BA05B"
		}, {
			"name": "Copper",
			"container": "cnt-copper",
			"hex": "#DA8A67"
		}, {
			"name": "Chesnut",
			"container": "cnt-chesnut",
			"hex": "#BC5D58"
		}, {
			"name": "Brick Red",
			"container": "cnt-brick-red",
			"hex": "#C62D42"
		}, {
			"name": "Silver",
			"container": "cnt-silver",
			"hex": "#C9C0BB"
		}, {
			"name": "Cerulean",
			"container": "cnt-cerulean",
			"hex": "#02A4D3"
		}, {
			"name": "Maroon",
			"container": "cnt-maroon",
			"hex": "#C32148"
		}, {
			"name": "Jazzberry Jam",
			"container": "cnt-jazzberry-jam",
			"hex": "#A50B5E"
		}, {
			"name": "Shamrock",
			"container": "cnt-shamrock",
			"hex": "#33CC99"
		}, {
			"name": "Macaroni & Cheese",
			"container": "cnt-macaroni-cheese",
			"hex": "#FFB97B"
		}, {
			"name": "Manatee",
			"container": "cnt-manatee",
			"hex": "#8D90A1"
		}, {
			"name": "Wisteria",
			"container": "cnt-wisteria",
			"hex": "#C9A0DC"
		}, {
			"name": "Wild Strawberry",
			"container": "cnt-wild-strawberry",
			"hex": "#FF3399"
		}, {
			"name": "Royal Purple",
			"container": "cnt-royal-purple",
			"hex": "#6B3FA0"
		}, {
			"name": "Yellow",
			"container": "cnt-yellow",
			"hex": "#FBE870"
		}, {
			"name": "Periwinkle",
			"container": "cnt-periwinkle",
			"hex": "#C3CDE6"
		}, {
			"name": "Spring Green",
			"container": "cnt-spring-green",
			"hex": "#ECEBBD"
		}, {
			"name": "Blue Violet",
			"container": "cnt-blue-violet",
			"hex": "#6456B7"
		}, {
			"name": "Yellow Orange",
			"container": "cnt-yellow-orange",
			"hex": "#FFAE42"
		}, {
			"name": "Plum",
			"container": "cnt-plum",
			"hex": "#8E3179"
		}, {
			"name": "Mauvelous",
			"container": "cnt-mauvelous",
			"hex": "#F091A9"
		}, {
			"name": "Wild Blue Yonder",
			"container": "cnt-wild-blue-yonder",
			"hex": "#7A89B8"
		}, {
			"name": "Bittersweet",
			"container": "cnt-bittersweet",
			"hex": "#FE6F5E"
		}, {
			"name": "Dandelion",
			"container": "cnt-dandelion",
			"hex": "#FED85D"
		}, {
			"name": "Sea Green",
			"container": "cnt-sea-green",
			"hex": "#93DFB8"
		}, {
			"name": "Vivid Tangerine",
			"container": "cnt-vivid-tangerine",
			"hex": "#FF9980"
		}, {
			"name": "Pine Green",
			"container": "cnt-pine-green",
			"hex": "#01786F"
		}, {
			"name": "Gold",
			"container": "cnt-gold",
			"hex": "#92926E"
		}, {
			"name": "Black",
			"container": "cnt-black",
			"hex": "#000000"
		}, {
			"name": "Ultramarine Blue",
			"container": "cnt-ultramarine-blue",
			"hex": "#3F26BF"
		}, {
			"name": "Cornflower",
			"container": "cnt-cornflower",
			"hex": "#93CCEA"
		}, {
			"name": "Brown",
			"container": "cnt-brown",
			"hex": "#AF593E"
		}, {
			"name": "Goldenrod",
			"container": "cnt-goldenrod",
			"hex": "#FCD667"
		}, {
			"name": "Tan",
			"container": "cnt-tan",
			"hex": "#D99A6C"
		}, {
			"name": "Pink Flamingo",
			"container": "cnt-pink-flamingo",
			"hex": "#FC74FD"
		}, {
			"name": "Green",
			"container": "cnt-green",
			"hex": "#3AA655"
		}, {
			"name": "Vivid Violet",
			"container": "cnt-vivid-violet",
			"hex": "#803790"
		}, {
			"name": "Mahogany",
			"container": "cnt-mahogany",
			"hex": "#CA3435"
		}, {
			"name": "Salmon",
			"container": "cnt-salmon",
			"hex": "#FF91A4"
		}, {
			"name": "Gray",
			"container": "cnt-gray",
			"hex": "#8B8680"
		}]
	};
	
	plus1 = $("#plus-one");
	plus2 = $("#plus-two");
	plus3 = $("#plus-three");
	plus4 = $("#plus-four");

	minus1 = $("#minus-one");
	minus2 = $("#minus-two");
	minus3 = $("#minus-three");
	minus4 = $("#minus-four");

	head1 = $("#head-one");
	head2 = $("#head-two");
	head3 = $("#head-three");
	head4 = $("#head-four");

	detail1 = $("#detail-one");
	detail2 = $("#detail-two");
	detail3 = $("#detail-three");
	detail4 = $("#detail-four");

	close1 = $("#btn-close-row-1");
	close2 = $("#btn-close-row-2");
	close3 = $("#btn-close-row-3");
	close4 = $("#btn-close-row-4");

	open1 = $("#btn-open-row-1");
	open2 = $("#btn-open-row-2");
	open3 = $("#btn-open-row-3");
	open4 = $("#btn-open-row-4");
	
	// Toggle between open and close
	plus1.click(function () {
		head1.hide();
		detail1.slideToggle('fast');
		close1.hide();
		open1.slideToggle('fast');
		plus1.hide();
		minus1.show();
	});
	minus1.click(function () {
		head1.show();
		detail1.slideToggle('fast');
		close1.show();
		open1.slideToggle('fast');
		plus1.show();
		minus1.hide();
	});
	plus2.click(function () {
		head2.hide();
		detail2.slideToggle('fast');
		close2.hide();
		open2.slideToggle('fast');
		plus2.hide();
		minus2.show();
	});
	minus2.click(function () {
		head2.show();
		detail2.slideToggle('fast');
		close2.show();
		open2.slideToggle('fast');
		plus2.show();
		minus2.hide();
	});
	plus3.click(function () {
		head3.hide();
		detail3.slideToggle('fast');
		close3.hide();
		open3.slideToggle('fast');
		plus3.hide();
		minus3.show();
	});
	minus3.click(function () {
		head3.show();
		detail3.slideToggle('fast');
		close3.show();
		open3.slideToggle('fast');
		plus3.show();
		minus3.hide();
	});
	plus4.click(function () {
		head4.hide();
		detail4.slideToggle('fast');
		close4.hide();
		open4.slideToggle('fast');
		plus4.hide();
		minus4.show();
	});
	minus4.click(function () {
		head4.show();
		detail4.slideToggle('fast');
		close4.show();
		open4.slideToggle('fast');
		plus4.show();
		minus4.hide();
	});
	
	var crayonArray = [
		"crayon-blush",
		"crayon-green-yellow",
		"crayon-magenta",
		"crayon-mango-tango",
		"crayon-fuchsia",
		"crayon-red",
		"crayon-sepia",
		"crayon-red-orange",
		"crayon-orchid",
		"crayon-navy-blue",
		"crayon-burnt-orange",
		"crayon-raw-sienna",
		"crayon-orange",
		"crayon-peach",
		"crayon-outer-space",
		"crayon-denim",
		"crayon-carnation-pink",
		"crayon-wild-watermelon",
		"crayon-tumbleweed",
		"crayon-turquoise-blue",
		"crayon-jungle-green",
		"crayon-white",
		"crayon-violet-red",
		"crayon-yellow-green",
		"crayon-lavender",
		"crayon-cerise",
		"crayon-midnight-blue",
		"crayon-screamin-green",
		"crayon-caribbean-green",
		"crayon-razzmatazz",
		"crayon-robin-egg-blue",
		"crayon-granny-smith-apple",
		"crayon-canary",
		"crayon-forest-green",
		"crayon-blue-green",
		"crayon-shocking-pink",
		"crayon-sky-blue",
		"crayon-red-violet",
		"crayon-melon",
		"crayon-timberwolf",
		"crayon-fuzzy-wuzzy",
		"crayon-cotton-candy",
		"crayon-banana-mania",
		"crayon-purple-mountain-majesty",
		"crayon-tickle-me-pink",
		"crayon-apricot",
		"crayon-blue",
		"crayon-burnt-sienna",
		"crayon-olive-green",
		"crayon-cadet-blue",
		"crayon-pig-pink",
		"crayon-pacific-blue",
		"crayon-hot-magenta",
		"crayon-tropical-rain-forest",
		"crayon-sunset-orange",
		"crayon-inchworm",
		"crayon-asparagus",
		"crayon-copper",
		"crayon-chesnut",
		"crayon-brick-red",
		"crayon-silver",
		"crayon-cerulean",
		"crayon-maroon",
		"crayon-jazzberry-jam",
		"crayon-shamrock",
		"crayon-macaroni-cheese",
		"crayon-manatee",
		"crayon-wisteria",
		"crayon-wild-strawberry",
		"crayon-royal-purple",
		"crayon-yellow",
		"crayon-periwinkle",
		"crayon-spring-green",
		"crayon-blue-violet",
		"crayon-yellow-orange",
		"crayon-plum",
		"crayon-mauvelous",
		"crayon-wild-blue-yonder",
		"crayon-bittersweet",
		"crayon-dandelion",
		"crayon-sea-green",
		"crayon-vivid-tangerine",
		"crayon-pine-green",
		"crayon-gold",
		"crayon-black",
		"crayon-ultramarine-blue",
		"crayon-cornflower",
		"crayon-brown",
		"crayon-goldenrod",
		"crayon-tan",
		"crayon-pink-flamingo",
		"crayon-green",
		"crayon-vivid-violet",
		"crayon-mahogany",
		"crayon-salmon",
		"crayon-gray"
	];

	/* Crayons rise out of box when hovered over */
	$(".crayon").hover(function () {
		$(this).css('position', 'relative');
		$(this).animate({
			bottom: '32px'
		}, 'fast');
	}, function () {
		$(this).css('position', 'relative');
		$(this).animate({
			bottom: '0'
		}, 'fast');
	});
	
	/* Click crayons to display info */
	$(".crayon").click(function () {
		var c = $(this).attr('id');
		var i = crayonArray.indexOf(c);
		
		var obj_myName, obj_myHex;
		obj_myName = document.getElementById("myName");
		obj_myHex = document.getElementById("myHex");
		
		obj_myName.innerHTML = json.crayons[i].name;
		obj_myHex.innerHTML = json.crayons[i].hex;
		
		if (obj_myName.innerHTML === "White") {
			$("#myName").css('color', '#000000');
			$("#mySwatch").css('background-color', json.crayons[i].hex);
		} else {
			$("#myName").css('color', json.crayons[i].hex);
			$("#mySwatch").css('background-color', json.crayons[i].hex);
		}
		
	});
});
