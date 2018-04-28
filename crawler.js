const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

const fs = require('fs');

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

	const img = await page.evaluate(()=>{
		let imgLink = document.querySelector('#orta > div.sol > div.icerikalani > p:nth-child(1) > strong > img').getAttribute('src');
		return imgLink;
	});


	const result = await page.evaluate(() => {
		let title = document.querySelector('h1').innerText;
		let data = document.querySelector('#orta > div.sol > div.icerikalani').innerText;
		data = data.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
		return {
			title,
			data,
			imgDir: ''
		}
	});


	var viewSource = await page.goto(img);
	fs.writeFile("./images/anu.jpg", await viewSource.buffer(), function(err) {
		if(err) {
			return console.log(err);
		}
		console.log("The file was saved!");
	});
	
	result.imgDir = "./images/anu.jpg";
  
	
	browser.close();

  	return result;
};
