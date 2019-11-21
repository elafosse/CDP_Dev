// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('listTests', function() {
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
  it('listTests', async function() {
    await driver.get("http://localhost:3000/")
    await driver.setRect(1251, 725)
    await driver.findElement(By.linkText("Sign In")).click()
    await driver.findElement(By.id("username")).sendKeys("coucou")
    await driver.findElement(By.id("password")).sendKeys("h")
    await driver.findElement(By.id("password")).sendKeys(Key.ENTER)
    await driver.findElement(By.linkText("Details")).click()
    await driver.findElement(By.linkText("Tests")).click()
    await driver.findElement(By.linkText("4: t2")).click()
    await driver.findElement(By.linkText("12: Hello")).click()
    await driver.findElement(By.linkText("9: bonjour")).click()
  })
})