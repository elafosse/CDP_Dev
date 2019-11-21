// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('removeProject', function() {
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
  it('removeProject', async function() {
    await driver.get("http://localhost:3000/")
    await driver.setRect(1251, 725)
    await driver.findElement(By.linkText("Manage Projects")).click()
    await driver.findElement(By.css("li:nth-child(3) form > .btn")).click()
    assert(await driver.switchTo().alert().getText() == "Voulez-vous vraiment supprimer ce projet ?")
    await driver.switchTo().alert().accept()
  })
})
