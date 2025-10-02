import { Page } from "@playwright/test";
import { MovieDetails } from "./bodyBlocks/movieDetails";
import { Top250Movies } from "./bodyBlocks/top250Movies";

export default class Body {
    private readonly page: Page
    readonly movieDetails: MovieDetails
    readonly top250Movies: Top250Movies
    constructor(page: Page) {
        this.page = page
        this.movieDetails = new MovieDetails(this.page)
        this.top250Movies = new Top250Movies(this.page)
    }

    
}