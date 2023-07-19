const puppeteer = require('puppeteer');
var fs = require('fs');

function pupindex() {
  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('https://instrack.app/instagram/laris.acessorioss');
    await page.waitForSelector('.my-50');
    const seguidores = await page.$eval('.my-50', element => element.innerText);
    const instagram_seguidores = seguidores;
    await page.goto('https://www.instagram.com/laris.acessorioss/');
    await page.waitForSelector('._ac2a');
    const postagens = await page.$eval('._ac2a', element => element.innerText)
    const instagram_postagens = postagens;
    
    const DadosArray = [{
      "instagram_postagens":  instagram_postagens,
      "instagram_seguidores": instagram_seguidores
    }]
  
    console.log(DadosArray)
  
    fs.writeFile('instagram.json', JSON.stringify(DadosArray, null, 2), err => {

    })
  
    await browser.close();
  
  })();
};
pupindex()