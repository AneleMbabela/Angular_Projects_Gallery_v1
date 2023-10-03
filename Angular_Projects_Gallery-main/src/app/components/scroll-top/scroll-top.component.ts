import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from "@angular/core";

@Component({
	selector: "app-scroll-top",
	templateUrl: "./scroll-top.component.html",
	styleUrls: ["./scroll-top.component.scss"],
})
export class ScrollTopComponent implements AfterViewInit {
	@ViewChild("scroller") scroller!: ElementRef;

	ngOninit() {}

	ngAfterViewInit() {}

	@HostListener("window:scroll")
	adjustHeights() {
		if (window.pageYOffset > 150) {
			this.scroller.nativeElement.classList.remove("invisible");
		} else {
			this.scroller.nativeElement.classList.add("invisible");
		}
	}

	scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
}
