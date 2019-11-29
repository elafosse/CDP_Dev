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
    await driver.findElement(By.id("password")).sendKeys(Key.ENTER)
    await driver.findElement(By.linkText("Details")).click()
    await driver.findElement(By.linkText("Issues")).click()
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("1")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("2")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("3")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("4")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueName")).sendKeys("I1")
    await driver.findElement(By.css(".list-group-item:nth-child(1)")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("As a member I want to create a new project In order to work on it")
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
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("As a user I want to create an account In order to create and manage my projects")
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.linkText("Add Issue")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueName")).sendKeys("I3")
    await driver.findElement(By.id("issuePriority")).click()
    {
      const dropdown = await driver.findElement(By.id("issuePriority"))
      await dropdown.findElement(By.xpath("//option[. = 'HIGH']")).click()
    }
    await driver.findElement(By.css("option:nth-child(3)")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("1")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("2")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("3")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("4")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("5")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("6")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("7")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("8")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("9")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("10")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("11")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("12")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("13")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("As a member of a project I want to create a new issue In order to see it in the list of issue")
    await driver.findElement(By.css(".float-right:nth-child(1)")).click()
    await driver.findElement(By.css("#heading164 > .d-block")).click()
    await driver.findElement(By.linkText("✎")).click()
    await driver.findElement(By.id("issueName")).click()
    await driver.findElement(By.id("issueName")).sendKeys("I2 - bis")
    await driver.findElement(By.id("issuePriority")).click()
    {
      const dropdown = await driver.findElement(By.id("issuePriority"))
      await dropdown.findElement(By.xpath("//option[. = 'MEDIUM']")).click()
    }
    await driver.findElement(By.css("option:nth-child(2)")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("2")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("3")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("4")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("5")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("6")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDifficulty")).sendKeys("7")
    await driver.findElement(By.id("issueDifficulty")).click()
    {
      const element = await driver.findElement(By.id("issueDifficulty"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("issueDifficulty")).sendKeys("8")
    await driver.findElement(By.id("issueDifficulty")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).click()
    await driver.findElement(By.id("issueDescription")).sendKeys("As a user I want to create an account In order to create a project")
    await driver.findElement(By.css(".float-right")).click()
    await driver.findElement(By.css(".badge-info")).click()
    await driver.findElement(By.linkText("✎")).click()
    await driver.findElement(By.css(".float-right")).click()
    await driver.findElement(By.css("#heading164 .badge-secondary")).click()
    await driver.findElement(By.css("#collapse164 form > .btn")).click()
    assert(await driver.switchTo().alert().getText() == "Voulez-vous vraiment supprimer cette issue ?")
    await driver.switchTo().alert().accept()
    await driver.findElement(By.css(".btn-outline-danger:nth-child(1)")).click()
    await driver.close()
  })
})
