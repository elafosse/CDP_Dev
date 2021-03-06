// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('006_addSprintThenModifySprintThenDeleteSprint', function() {
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
  it('006_addSprintThenModifySprintThenDeleteSprint', async function() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.linkText("Sign In")).click()
    await driver.findElement(By.id("username")).sendKeys("Test")
    await driver.findElement(By.css("form")).click()
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("test")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.linkText("Details")).click()
    await driver.findElement(By.linkText("Issues")).click()
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueName")).sendKeys("I1")
    await driver.findElement(By.id("issuePriority")).click()
    await driver.findElement(By.css("option:nth-child(1)")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("1")
    await driver.findElement(By.id("issueDifficulty")).click()
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
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.linkText("Sprints")).click()
    await driver.findElement(By.linkText("Add Sprint")).click()
    await driver.findElement(By.id("sprintObjective")).click()
    await driver.findElement(By.id("sprintObjective")).sendKeys("Test")
    {
      const dropdown = await driver.findElement(By.id("sprintIssue"))
      await dropdown.findElement(By.xpath("//option[. = 'I1']")).click()
    }
    await driver.findElement(By.id("date_begin")).click()
    await driver.findElement(By.id("date_begin")).sendKeys("2019-12-27")
    await driver.findElement(By.id("date_end")).click()
    await driver.findElement(By.id("date_end")).sendKeys("2019-12-27")
    await driver.findElement(By.css(".float-right")).click()
    await driver.findElement(By.linkText("Add Sprint")).click()
    await driver.findElement(By.id("sprintObjective")).click()
    await driver.findElement(By.id("sprintObjective")).sendKeys("Test2")
    {
      const dropdown = await driver.findElement(By.id("sprintIssue"))
      await dropdown.findElement(By.xpath("//option[. = 'I2']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("sprintIssue"))
      await dropdown.findElement(By.xpath("//option[. = 'I1']")).click()
    }
    await driver.findElement(By.id("date_begin")).click()
    await driver.findElement(By.id("date_begin")).sendKeys("2019-12-28")
    await driver.findElement(By.id("date_end")).click()
    await driver.findElement(By.id("date_end")).sendKeys("2019-12-28")
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.xpath("//i[contains(.,\'Sprint 1\')]")).click()
    await driver.findElement(By.linkText("✎")).click()
    await driver.findElement(By.id("sprintObjective")).click()
    await driver.findElement(By.id("sprintObjective")).sendKeys("Test - bis")
    {
      const dropdown = await driver.findElement(By.id("sprintIssue"))
      await dropdown.findElement(By.xpath("//option[. = 'I2']")).click()
    }
    await driver.findElement(By.css(".float-right")).click()
    await driver.findElement(By.xpath("//div[2]/ul/li/div/h5/a/i")).click()
    await driver.findElement(By.xpath("(//button[@type=\'submit\'])[4]")).click()
    await driver.switchTo().alert().accept()
    await driver.findElement(By.name("signout")).click()
  })
})
