import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewEncapsulation, ViewChildren, HostListener } from "@angular/core";
// @ts-ignore
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, {
	SwiperOptions,
	Pagination,
	Navigation,
	Keyboard,
	// Autoplay,
} from "swiper";
import { ApiService } from "src/app/services/api.service";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Keyboard]);

@Component({
	selector: "app-gallery",
	templateUrl: "./gallery.component.html",
	styleUrls: ["./gallery.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent implements AfterViewInit, OnInit {
	@ViewChildren("galleryProject") galleryProject!: QueryList<ElementRef>;
	constructor(private renderer: Renderer2, private albumData: ApiService) {}

	ngOnInit() {}

	ngAfterViewInit(): void {}

	openModal($event: any) {
		this.renderer.addClass($event, "active");
		$event.querySelector(".swiper-close").focus();
	}

	closeModal(el: any, $event: any) {
		$event.stopPropagation();
		this.renderer.removeClass(el, "active");
		el.focus();
	}

	@HostListener("document:keyup.escape")
	handleEscapeKey(): void {
		const galleryElementArray = this.galleryProject.toArray();
		galleryElementArray.forEach((item) => {
			console.log(item.nativeElement);
			if (item.nativeElement.classList.contains("active")) {
				item.nativeElement.classList.remove("active");
			}
		});
	}

	//SWIPER OPTIONS
	config: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: true,
		pagination: {
			clickable: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
			pageUpDown: true,
		},
		loop: true,
		speed: 500,
	};
	onSwiper(swiper: any) {}
	onSlideChange() {}

	//ALBUMS PHOTO DATA
	albums = [
		{
			thumbnailSrc: "../../assets/images/gallery/thumbnails/portfolio.webp",
			thumbnailDescription: "ReactJS | Portfolio",
			thumbnailAlt: "Album - Portfolio",
			SliderImages: [
				{
					src: "../../assets/images/gallery/project/portfolio/portfolio_1.jpg",
					alt: "album portfolio_1",
				},
				{
					src: "../../assets/images/gallery/project/portfolio/portfolio_2.jpg",
					alt: "album portfolio_2",
				},
				{
					src: "../../assets/images/gallery/project/portfolio/portfolio_3.jpg",
					alt: "album portfolio_3",
				},
			],
		},
		{
			thumbnailSrc: "../../assets/images/gallery/thumbnails/kanban.webp",
			thumbnailDescription: "VUEJS | KANBAN",
			thumbnailAlt: "Album - KANBAN",
			SliderImages: [
				{
					src: "../../assets/images/gallery/project/kanban/kanban_1.jpg",
					alt: "album kanban_1",
				},
				{
					src: "../../assets/images/gallery/project/kanban/kanban_2.jpg",
					alt: "album kanban_2",
				},
				{
					src: "../../assets/images/gallery/project/kanban/kanban_3.jpg",
					alt: "album kanban_3",
				},
				
			],
		},

		{
			thumbnailSrc: "../../assets/images/gallery/thumbnails/url_shortner.webp",
			thumbnailDescription: "ReactJS | URL Shortener",
			thumbnailAlt: "Album - URL Shortener",
			SliderImages: [
				{
					src: "../../assets/images/gallery/project/url_shortener/url_1.jpg",
					alt: "album url_1",
				},
				{
					src: "../../assets/images/gallery/project/url_shortener/url_2.jpg",
					alt: "album url_2",
				},
				{
					src: "../../assets/images/gallery/project/url_shortener/url_3.jpg",
					alt: "album url_3",
				},
			],
		},
		{
			thumbnailSrc: "../../assets/images/gallery/thumbnails/cooking_recipe.webp",
			thumbnailDescription: "ReactJS | Cooking Recipe App",
			thumbnailAlt: "Album - Cooking Recipe App",
			SliderImages: [
				{
					src: "../../assets/images/gallery/project/cooking_recipe/cooking_recipe_1.jpg",
					alt: "album cooking_recipe_1",
				},
				{
					src: "../../assets/images/gallery/project/cooking_recipe/cooking_recipe_2.jpg",
					alt: "album cooking_recipe_2",
				},
				{
					src: "../../assets/images/gallery/project/cooking_recipe/cooking_recipe_3.jpg",
					alt: "album cooking_recipe_3",
				},
			],
		},

		{
			thumbnailSrc: "../../assets/images/gallery/thumbnails/cocktail_recipe.webp",
			thumbnailDescription: "ReactJS | Cocktail Recipe App",
			thumbnailAlt: "Album - Cocktail Recipe App",
			SliderImages: [
				{
					src: "../../assets/images/gallery/project/cocktail/cocktail_1.jpg",
					alt: "album cocktail_1",
				},
				{
					src: "../../assets/images/gallery/project/cocktail/cocktail_2.jpg",
					alt: "album cocktail_2",
				},
				{
					src: "../../assets/images/gallery/project/cocktail/cocktail_3.jpg",
					alt: "album cocktail_3",
				},
			],
		},
		{
			thumbnailSrc: "../../assets/images/gallery/thumbnails/image_classifier.webp",
			thumbnailDescription: "Python | Image Classifier App",
			thumbnailAlt: "Album - Image Classifier App",
			SliderImages: [
				{
					src: "../../assets/images/gallery/project/image_classifier/image_classifier_1.jpg",
					alt: "album image_classifier_1",
				},
				{
					src: "../../assets/images/gallery/project/image_classifier/image_classifier_2.jpg",
					alt: "album image_classifier_2",
				},
				{
					src: "../../assets/images/gallery/project/image_classifier/image_classifier_3.jpg",
					alt: "album image_classifier_3",
				},
			],
		},
		{
			thumbnailSrc: "../../assets/images/gallery/thumbnails/music_player.webp",
			thumbnailDescription: "JS | Music Player",
			thumbnailAlt: "Album - Music Player",
			SliderImages: [
				{
					src: "../../assets/images/gallery/project/music_player/music_player_1.jpg",
					alt: "album music_player_1",
				},
				{
					src: "../../assets/images/gallery/project/music_player/music_player_2.jpg",
					alt: "album music_player_2",
				},
				{
					src: "../../assets/images/gallery/project/music_player/music_player_3.jpg",
					alt: "album music_player_3",
				},
			],
		},
		{
			thumbnailSrc: "../../assets/images/gallery/thumbnails/crypto_tracker.webp",
			thumbnailDescription: "ReactJS | Crypto Tracker App",
			thumbnailAlt: "Album - Crypto Tracker App",
			SliderImages: [
				{
					src: "../../assets/images/gallery/project/crypto_tracker/crypto_tracker_1.jpg",
					alt: "album crypto_tracker_1",
				},
				{
					src: "../../assets/images/gallery/project/crypto_tracker/crypto_tracker_2.jpg",
					alt: "album crypto_tracker_2",
				},
				{
					src: "../../assets/images/gallery/project/crypto_tracker/crypto_tracker_3.jpg",
					alt: "album crypto_tracker_3.jpg",
				},
			],
		},
	];
}
