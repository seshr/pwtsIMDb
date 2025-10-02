import { test, expect } from '@playwright/test';
import { MainPage } from '../pageObjects/mainPage';

test.describe('Test suite', () => {
  test.beforeEach(async ({page}) => {
    // 1. Navigate to the IMDb homepage
    await page.goto('./')

    // check title of page
    await expect(page).toHaveTitle('IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows');
  })

  test('Search and Validate Movie', async ({ page }) => {
    const mainPage: MainPage = new MainPage(page)
    const movie = 'Inception'
    
    // 2. Search for a movie title (e.g., Inception)
    await mainPage.header.searchByValue(movie)
    // 3. Click on the movie from the search results
    await mainPage.header.selectMovieInSearchResultByName(movie)

    // Movie title on the details page matches the search keyword
    await expect(mainPage.body.movieDetails.getResultTitle()).toHaveText(movie)
  });

  test('First movie of top 250', async ({ page }) => {
    const mainPage: MainPage = new MainPage(page)
    
    // 2. Go to the IMDb Top 250 Movies page (via menu).
    await mainPage.header.openMenu()
    await mainPage.navigationDrawer.selectMenuItemByName('Top 250 movies')
    // 3. Click on the first movie in the list.
    await mainPage.body.top250Movies.selectMovieInListByIndex(0)

    // Movie title is visible.
    await expect(mainPage.body.movieDetails.getResultTitle()).toHaveText('The Shawshank Redemption')
    // Rating is displayed.
    await expect(mainPage.body.movieDetails.getResultRating()).toContainText(['IMDb RATING', '9.3'])
    // Year of release is shown.
    await expect(mainPage.body.movieDetails.getResultMovieYear()).toHaveText('1994')
  })
})


