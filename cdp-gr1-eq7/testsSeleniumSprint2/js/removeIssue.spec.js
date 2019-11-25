// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('removeIssue', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('removeIssue', async function() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.linkText("Manage Projects")).click()
    await driver.findElement(By.css("li:nth-child(2) .list-inline-item > .btn")).click()
    await driver.findElement(By.linkText("Issues")).click()
    await driver.findElement(By.css("#heading136 > .d-block")).click()
    await driver.findElement(By.css("#collapse136 form > .btn")).click()
    assert(await driver.switchTo().alert().getText() == "Voulez-vous vraiment supprimer cette issue ?")
    await driver.switchTo().alert().accept()
    await driver.findElement(By.css("#heading142 > .d-block")).click()
    await driver.findElement(By.css("#collapse142 form > .btn")).click()
    assert(await driver.switchTo().alert().getText() == "Voulez-vous vraiment supprimer cette issue ?")
    await driver.switchTo().alert().accept()
    await driver.findElement(By.css("#heading139 > .d-block")).click()
    await driver.findElement(By.css("#collapse139 form > .btn")).click()
    assert(await driver.switchTo().alert().getText() == "Voulez-vous vraiment supprimer cette issue ?")
    await driver.switchTo().alert().accept()
    await driver.findElement(By.css("#heading140 > .d-block")).click()
    await driver.findElement(By.css("#collapse140 form > .btn")).click()
    assert(await driver.switchTo().alert().getText() == "Voulez-vous vraiment supprimer cette issue ?")
    await driver.switchTo().alert().accept()
    await driver.findElement(By.linkText("Issues")).click()
  })
})
