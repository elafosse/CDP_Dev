// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('createNewProject', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('createNewProject', async function() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.linkText("Manage Projects")).click()
    await driver.findElement(By.linkText("New Project")).click()
    await driver.findElement(By.id("projectName")).click()
    await driver.findElement(By.id("projectName")).sendKeys("ProjectTest")
    await driver.findElement(By.id("projectDescription")).click()
    await driver.findElement(By.id("projectDescription")).sendKeys("Project to test the appli")
    await driver.findElement(By.id("usernameMemberToAdd")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).sendKeys("User5")
    await driver.findElement(By.css(".btn:nth-child(6)")).click()
    await driver.findElement(By.id("projectName")).click()
    await driver.findElement(By.id("projectName")).sendKeys("Project ")
    await driver.findElement(By.id("projectName")).sendKeys(Key.DOWN)
    await driver.findElement(By.id("projectName")).sendKeys("ProjectTest")
    await driver.findElement(By.id("projectDescription")).click()
    await driver.findElement(By.id("projectDescription")).sendKeys("P")
    await driver.findElement(By.id("projectDescription")).sendKeys(Key.DOWN)
    await driver.findElement(By.id("projectDescription")).sendKeys("Project to test the appli")
    await driver.findElement(By.css(".btn-danger")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).sendKeys("User5")
    await driver.findElement(By.css(".btn:nth-child(6)")).click()
    await driver.findElement(By.id("projectName")).click()
    await driver.findElement(By.id("projectName")).sendKeys("P")
    await driver.findElement(By.id("projectName")).sendKeys(Key.DOWN)
    await driver.findElement(By.id("projectName")).sendKeys(Key.DOWN)
    await driver.findElement(By.id("projectName")).sendKeys("ProjectTest")
    await driver.findElement(By.id("projectDescription")).click()
    await driver.findElement(By.id("projectDescription")).sendKeys("Pro")
    await driver.findElement(By.id("projectDescription")).sendKeys(Key.DOWN)
    await driver.findElement(By.id("projectDescription")).sendKeys("Project to test the appli")
    await driver.findElement(By.id("createNewProject")).click()
  })
})
