import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-theme-button",
	templateUrl: "./theme-button.component.html",
	styleUrls: ["./theme-button.component.scss"],
})
export class ThemeButtonComponent implements OnInit {
	ngOnInit() {}

	body = document.querySelector("body")!;

	toggleTheme() {
		if (this.body?.getAttribute("color-scheme") === "dark") {
			this.body!.setAttribute("color-scheme", "light");
			localStorage.setItem("theme", "light-theme");
		} else if (this.body?.getAttribute("color-scheme") === "light") {
			this.body!.setAttribute("color-scheme", "dark");
			localStorage.setItem("theme", "dark-theme");
		}
	}
}
