// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('overviewProject', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('overviewProject', async function() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.linkText("Manage Projects")).click()
    await driver.findElement(By.css("li:nth-child(2) .list-inline-item > .btn")).click()
  })
})
