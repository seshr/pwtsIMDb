import { Page } from "@playwright/test";

export class Header {
    private readonly page
    constructor(page: Page) {
        this.page = page
    }

    async searchByValue(value: string) {
        const searchInput = this.page.getByTestId('suggestion-search')
        await searchInput.fill(value)
    }

    async selectMovieInSearchResultByName(movie: string) {
        const result = this.page.getByRole('listbox').getByRole('option', {name: movie}).first()
        await result.click()
    }

    async openMenu() {
        await this.page.getByLabel('Open navigation drawer').click()
    }
}