// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('005_addIssueThenModifyIssueThenDeleteIssue', function() {
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
  it('005_addIssueThenModifyIssueThenDeleteIssue', async function() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.linkText("Sign In")).click()
    await driver.findElement(By.id("username")).sendKeys("Test")
    await driver.findElement(By.id("password")).sendKeys("test")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.wait(until.elementLocated(By.linkText("Details")), 30000)
    await driver.findElement(By.linkText("Details")).click()
    await driver.wait(until.elementLocated(By.linkText("Issues")), 30000)
    await driver.findElement(By.linkText("Issues")).click()
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("1")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueName")).sendKeys("I1")
    await driver.findElement(By.css(".list-group-item:nth-child(1)")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("As a dev I want to test my project In order to find bugs")
    await driver.wait(until.elementLocated(By.css(".float-right")), 30000)
    await driver.findElement(By.css(".float-right")).click()
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueName")).sendKeys("I2")
    await driver.findElement(By.id("issuePriority")).click()
    {
      const dropdown = await driver.findElement(By.id("issuePriority"))
      await dropdown.findElement(By.xpath("//option[. = 'MEDIUM']")).click()
    }
    await driver.findElement(By.css("option:nth-child(2)")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("1")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("2")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("3")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("4")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("5")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("6")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("7")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("8")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("9")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("10")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("11")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("12")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("13")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("14")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("As a dev I want to make a project that works In order to have a good grade")
    await driver.wait(until.elementLocated(By.css(".float-right:nth-child(1)")), 300000)
    await driver.wait(until.elementLocated(By.css(".float-right:nth-child(1)")), 300000)
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.wait(until.elementLocated(By.linkText("Add Issue")), 30000)
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueName")).sendKeys("I3")
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id("issuePriority"))), 30000)
    await driver.wait(until.elementLocated(By.id("issuePriority")), 30000)
    await driver.findElement(By.id("issuePriority")).click()
    {
      const dropdown = await driver.findElement(By.id("issuePriority"))
      await dropdown.findElement(By.xpath("//option[. = 'HIGH']")).click()
    }
    await driver.findElement(By.css("option:nth-child(3)")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("1")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("2")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("3")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("4")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("5")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("6")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("7")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("8")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("9")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("10")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("As a user I want to add an issue In order to see it in the list of issues")
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.wait(until.elementLocated(By.css(".badge-warning")), 30000)
    await driver.findElement(By.css(".badge-warning")).click()
    await driver.findElement(By.linkText("✎")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("13")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("12")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("11")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("10")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("9")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issuePriority")).click()
    {
      const dropdown = await driver.findElement(By.id("issuePriority"))
      await dropdown.findElement(By.xpath("//option[. = 'MEDIUM']")).click()
    }
    await driver.findElement(By.css("option:nth-child(2)")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("no")
    await driver.findElement(By.css(".float-right")).click()
    await driver.findElement(By.css(".badge-warning")).click()
    await driver.findElement(By.linkText("✎")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueName")).sendKeys("I2 - bis")
    await driver.findElement(By.css(".form-row")).click()
    await driver.findElement(By.css(".float-right")).click()
    await driver.findElement(By.xpath("//li[2]/div/h5/a/span[2]")).click()
    await driver.findElement(By.xpath("//li[2]/div/div/div/ul/li/form/button")).click()
    await driver.switchTo().alert().accept()
    await driver.findElement(By.name("signout")).click()
  })
})
