// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('addIssue', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('addIssue', async function() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.linkText("Manage Projects")).click()
    await driver.findElement(By.css("li:nth-child(2) .list-inline-item > .btn")).click()
    await driver.findElement(By.linkText("Issues")).click()
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueName")).sendKeys("I1")
    await driver.findElement(By.id("issuePriority")).click()
    await driver.findElement(By.id("issuePriority")).sendKeys("LOW")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("1")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("Test")
    await driver.findElement(By.css(".float-right")).click()
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueName")).sendKeys("I2")
    await driver.findElement(By.id("issuePriority")).click()
    await driver.findElement(By.id("issuePriority")).sendKeys("HIGH")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("0")
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("Test2")
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueName")).sendKeys("I3")
    await driver.findElement(By.id("issuePriority")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("1")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("2")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("3")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("4")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("5")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("6")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issuePriority")).sendKeys("MEDIUM")
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("Test3")
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueName")).sendKeys("False Priority")
    await driver.findElement(By.id("issuePriority")).click()
    await driver.findElement(By.id("issuePriority")).sendKeys("frgh,j;kj")
    await driver.findElement(By.css(".badge:nth-child(8)")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("1")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("Test false priority")
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueName")).sendKeys("False Difficulty")
    await driver.findElement(By.id("issuePriority")).click()
    await driver.findElement(By.id("issuePriority")).sendKeys("HIGH")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("Test False Difficulty")
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("0")
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueName")).sendKeys("No description")
    await driver.findElement(By.id("issuePriority")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("1")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issuePriority")).sendKeys("HIGH")
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("Description")
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("No name")
    await driver.findElement(By.id("issuePriority")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("1")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("2")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("3")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("4")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issuePriority")).sendKeys("LOW")
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.id("issueName")).sendKeys("Name")
    {
      const element = await driver.findElement(By.css(".float-right:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.css(".float-right:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.css(".float-right:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
  })
})
