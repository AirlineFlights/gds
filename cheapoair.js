var program_name = process.argv[0]; //value will be "node"
var script_path = process.argv[1]; //value will be "yourscript.js"
var first_value = process.argv[2]; //value will be "From"
var second_value = process.argv[3]; //value will be "To"
var departure_date = process.argv[4]; //value will be "MM/DD/YYYY"


const puppeteer = require("puppeteer") // Required to do the programmable browsering
const waitTillHTMLRendered = async (page, timeout = 30000) => {
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
   const url = `https://www.cheapoair.com/air/listing?&d1=${process.argv[2]}&r1=${process.argv[3]}&dt1=${process.argv[4]}&tripType=ONEWAYTRIP&cl=ECONOMY&ad=1&se=0&ch=0&infs=0&infl=0`;
   await page.goto(url, {'timeout': 30000, 'waitUntil':'load'});
   await waitTillHTMLRendered(page)
      const data = await page.content()
   await page.screenshot({path: 'cheapoair.png', fullPage: true})
   await browser.close();
}

start();