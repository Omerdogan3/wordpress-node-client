let config = require('./config/config');
const puppeteer = require('puppeteer');

module.exports = login_wp = async (page)=>{
    await page.goto(config.host);
    await page.waitFor(1000);
    await page.waitForSelector('#user_login');
    await page.type('#user_login',  config.userName);
    await page.type('#user_pass',  config.password);
    const submitButton = '#wp-submit';
    await page.waitForSelector(submitButton);
    await page.click(submitButton);
};