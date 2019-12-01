// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('005_youwork', function() {
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
  it('005_youwork', async function() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.linkText("Sign In")).click()
    await driver.findElement(By.id("username")).click()
    await driver.findElement(By.id("username")).sendKeys("Test")
    await driver.findElement(By.css(".justify-content-center")).click()
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("test")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.linkText("Details")).click()
    await driver.findElement(By.linkText("Sprints")).click()
    await driver.findElement(By.linkText("Add Sprint")).click()
    await driver.findElement(By.id("sprintObjective")).click()
    await driver.findElement(By.id("sprintObjective")).sendKeys("Test")
    {
      const dropdown = await driver.findElement(By.xpath("//select[@id=\'sprintIssue\']"))
      await dropdown.findElement(By.xpath("//option[. = 'I2']")).click()
    }
    await driver.findElement(By.id("date_begin")).click()
    await driver.findElement(By.id("date_begin")).sendKeys("2019-12-13")
    await driver.findElement(By.id("date_end")).click()
    await driver.findElement(By.id("date_end")).sendKeys("2019-12-13")
    await driver.findElement(By.css(".float-right")).click()
    await driver.findElement(By.linkText("Add Sprint")).click()
    await driver.findElement(By.id("sprintObjective")).click()
    await driver.findElement(By.id("sprintObjective")).sendKeys("Test 2")
    {
      const dropdown = await driver.findElement(By.xpath("//select[@id=\'sprintIssue\']"))
      await dropdown.findElement(By.xpath("//option[. = 'I2']")).click()
    }
    await driver.findElement(By.id("date_begin")).click()
    await driver.findElement(By.id("date_begin")).sendKeys("2019-12-26")
    await driver.findElement(By.id("date_end")).click()
    await driver.findElement(By.id("date_end")).sendKeys("2019-12-25")
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.xpath("//h5/a")).click()
    await driver.findElement(By.linkText("✎")).click()
    await driver.findElement(By.id("sprintObjective")).click()
    await driver.findElement(By.id("sprintObjective")).sendKeys("Test bis")
    await driver.findElement(By.css(".float-right")).click()
    await driver.findElement(By.xpath("//div[2]/ul/li/div/h5/a/span[2]")).click()
    await driver.findElement(By.xpath("(//button[@type=\'submit\'])[4]")).click()
    await driver.switchTo().alert().accept()
    await driver.findElement(By.name("signout")).click()
  })
})
