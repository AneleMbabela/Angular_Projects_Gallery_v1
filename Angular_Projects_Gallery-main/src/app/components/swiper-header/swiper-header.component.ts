import { Component } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Pagination, Navigation, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
	selector: "app-swiper-header",
	templateUrl: "./swiper-header.component.html",
	styleUrls: ["./swiper-header.component.scss"],
})
export class SwiperHeaderComponent {
	config: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: true,
		pagination: { clickable: true },
		scrollbar: { draggable: true },
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		loop: true,
	};
	onSwiper(swiper: any) {
		console.log(swiper);
	}
	onSlideChange() {
		console.log("slide change");
	}

	headerImages = [
		{
			src: "../../assets/images/gallery/portfolio/portfolio_1.jpg",
			alt: "Header picture number 1",
		},
		{
			src: "../../assets/images/gallery/portfolio/portfolio_2.jpg",
			alt: "Header picture number 2",
		},
		{
			src: "../../assets/images/gallery/portfolio/portfolio_3.jpg",
			alt: "Header picture number 3",
		},
	];
}
