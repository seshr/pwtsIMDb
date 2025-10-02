import { Page } from '@playwright/test'
import { Header } from './blocks/header'
import Body from './blocks/body'
import { NavigationDrawer } from './blocks/navigationDrawer'

export class MainPage {
    private readonly page: Page
    readonly header: Header
    readonly body: Body
    readonly navigationDrawer: NavigationDrawer
    constructor(page: Page) {
        this.page = page
        this.header = new Header(this.page)
        this.body = new Body(this.page)
        this.navigationDrawer = new NavigationDrawer(this.page)
    }
  

    
}