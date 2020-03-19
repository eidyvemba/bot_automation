var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var By = webdriver.By;

var driver = new webdriver.Builder().forBrowser('chrome').build();




driver.manage().window().maximize();

//método para enaviar os emails
function bot(email) {
	driver.get('https://msmastersi.com/contacto.php'); //endereço do site

	//preencher os campos
	driver.findElement(By.name('nome')).sendKeys('teste');
	driver.findElement(By.name('assunto')).sendKeys('bot ev teste');
	driver.findElement(By.name('email')).sendKeys(email);
	driver.findElement(By.name('msg')).sendKeys('testando o meu boot email');
	driver.findElement(By.tagName('button')).click();  //ativar o botão de enviar
}

var email;

// enviar 5 vezes
for(var i = 0; i <= 5; i++) {
	email = 'ev' + i + '@hotmail.com';
	bot(email);
}


