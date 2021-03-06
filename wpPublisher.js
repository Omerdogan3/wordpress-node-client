let config = require('./config/config');
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

const login_wp = require('./wpLogin');

module.exports = wpPublisher = async (data) => {
    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();
    page.setDefaultNavigationTimeout(300000);
    await page.emulate(iPhone);

    login_wp(page);

    const addButton = '#wp-admin-bar-new-content > a > span.ab-icon';
    await page.waitForSelector(addButton);
    await page.click(addButton);
    
    await page.waitForSelector('#title');
    await page.type('#title',  data.title);


    await page.waitFor(12000);
    await page.keyboard.down('Tab');
    await page.keyboard.type(data.data);


    // const imgButton = "#insert-media-button";
    // await page.waitForSelector(imgButton);
    // await page.click(imgButton);

    // await page.waitFor(2000);
    
    // const sendImgButton = "#__wp-uploader-id-1";
    // await page.waitForSelector(sendImgButton);
    // await page.click(sendImgButton);
    

    // await uploadFile('./images/anu.jpg');


    const submitButton = '#publish';
    await page.waitForSelector(submitButton);
    await page.click(submitButton);
};

