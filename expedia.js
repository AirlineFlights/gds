var program_name = process.argv[0]; //value will be "node"
var script_path = process.argv[1]; //value will be "yourscript.js"
var first_value = process.argv[2]; //value will be "from"
var second_value = process.argv[3]; //value will be "to"
var departure_date = process.argv[4]; //value will be "MM/DD/YYYY"
var uitk_card_link = "uitk-card-link" // this is the ID of the Flight Offer Cards
const puppeteer = require("puppeteer") // Required to do the programmable browsering
const waitTillHTMLRendered = async (page, timeout = 30000) => { // a timeout needs to be created to deplay the page long enough to capture all travel listings.
   const checkDurationMsecs = 1000;
   const maxChecks = timeout / checkDurationMsecs;
   let lastHTMLSize = 0;
   let checkCounts = 1;
   let countStableSizeIterations = 0;
   const minStableSizeIterations = 3;
 
   while(checkCounts++ <= maxChecks){
     let html = await page.content();
     let currentHTMLSize = html.length; 
 
     let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);
 
     console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);
 
     if(lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize) 
       countStableSizeIterations++;
     else 
       countStableSizeIterations = 0; //reset the counter
 
     if(countStableSizeIterations >= minStableSizeIterations) {
       console.log("Page rendered fully..");
       break;
     }
 
     lastHTMLSize = currentHTMLSize;
     await page.waitFor(checkDurationMsecs);
   }  
 };
async function start () {
   const browser = await puppeteer.launch()
   const page = await browser.newPage()
   // With Expidia there is an issue with turning the process.argv into the proper Url schema for expedia airport url syntax therefore a regex function will need to be used to check the user search and a dicionary needs to be made to map the various search possibilities ie. Itata codes, CITY, Ect.
   const url = `https://www.expedia.com/Flights-Search?leg1=from%3A${process.argv[2]}%2Cto%3A${process.argv[3]}%2Cdeparture:${process.argv[4]}TANYT&mode=search&options=carrier%3A%2A%2Ccabinclass%3A%2Cmaxhops%3A1%2Cnopenalty%3AN&pageId=0&passengers=adults%3A1%2Cchildren%3A0%2Cinfantinlap%3AN&trip=oneway`;
   await page.goto(url, {'timeout': 30000, 'waitUntil':'load'});
   await waitTillHTMLRendered(page)
      const data = await page.waitForSelector('#app-layer-base > div.uitk-view > div.uitk-view-row.uitk-view-row-theme-neutral.uitk-view-row-layout-centered.uitk-view-row-adslot-true.uitk-spacing.uitk-spacing-margin-blockend-three.uitk-spacing-margin-blockstart-six > div > section > main > ul');
      var element = await page.$('#app-layer-base > div.uitk-view > div.uitk-view-row.uitk-view-row-theme-neutral.uitk-view-row-layout-centered.uitk-view-row-adslot-true.uitk-spacing.uitk-spacing-margin-blockend-three.uitk-spacing-margin-blockstart-six > div > section > main > ul');
      await page.evaluate(() => {
        let signin = document.querySelector('#gc-custom-header-nav-bar-acct-menu > div');
      
        signin.parentNode.removeChild(signin); // The Signin Button Extends on the Expedia website so we need to remove it for a clean screenshot.
      });
   await element.screenshot({path: 'expedia.png'})
   await browser.close();
}

start();