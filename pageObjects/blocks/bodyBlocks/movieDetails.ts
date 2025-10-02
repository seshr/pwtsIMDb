import { Page } from "@playwright/test";

export class MovieDetails {
    private readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    getResultTitle() {
        return this.page.getByTestId('hero__pageTitle')
    }

    getResultRating() {
        return this.page.getByTestId('hero-rating-bar__aggregate-rating')
    }

    getResultMovieYear() {
        return this.page.getByTestId('hero__pageTitle').locator(' + ul>li').first()
    }
}