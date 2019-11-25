// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Index', function() {
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
  it('Index', async function() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.linkText("ScrumHelper")).click()
    await driver.findElement(By.linkText("Sign In")).click()
    await driver.findElement(By.id("username")).sendKeys("coucou")
    await driver.findElement(By.id("password")).sendKeys("h")
    await driver.findElement(By.id("password")).sendKeys(Key.ENTER)
    await driver.findElement(By.linkText("ScrumHelper")).click()
  })
})
