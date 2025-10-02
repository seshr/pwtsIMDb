import { Page } from "@playwright/test";

export class NavigationDrawer {
    private readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async selectMenuItemByName(name: string) {
        await this.page.getByTestId('nav-link-category').getByText(name).click()
    }
}