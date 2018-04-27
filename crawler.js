const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

let browser;
let page;

module.exports = crawler = async () => {
	browser = await puppeteer.launch({headless: false});
	page = await browser.newPage();
	page.setDefaultNavigationTimeout(300000);
	
	await page.emulate(iPhone);
	await page.goto("https://www.rehberlikservisi.net/category/film-kosesi/");

	const findedMovie = '#orta > div.sol > div.anasayfaliste > ul > li:nth-child(1) > a > div.baslik';
	await page.waitForSelector(findedMovie);
	await page.click(findedMovie);
	const tmpUrl = page.url();

  await page.waitFor(5000);
  
	const result = await page.evaluate(() => {
		let title = document.querySelector('h1').innerText;
		let data = document.querySelector('#orta > div.sol > div.icerikalani').innerText;
		data = data.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
		return {
			title,
			data
		}
	});
  
	browser.close();

  	return result;
};
