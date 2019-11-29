// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('001_signUpThenSignInThenSignOut', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('001_signUpThenSignInThenSignOut', async function() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.linkText("Sign Up")).click()
    await driver.findElement(By.id("username")).sendKeys("Test")
    await driver.findElement(By.css(".card-header")).click()
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("test")
    await driver.findElement(By.id("confirmedPassword")).click()
    await driver.findElement(By.id("confirmedPassword")).sendKeys("test")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.id("username")).sendKeys("Test")
    await driver.findElement(By.css("form")).click()
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("test")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css(".btn-outline-danger")).click()
    await driver.close()
  })
})
