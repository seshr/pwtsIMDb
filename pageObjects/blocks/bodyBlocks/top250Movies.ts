import { Page } from "@playwright/test";

export class Top250Movies {
    private readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async selectMovieInListByIndex(nth: number) {
        await this.page.getByTestId('chart-layout-main-column')
            .getByTestId('poster-watchlist-ribbon-add').locator(' + a').nth(nth).click()
    }
}