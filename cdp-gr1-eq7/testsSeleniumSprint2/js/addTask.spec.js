// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('addTask', function() {
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
  it('addTask', async function() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.linkText("Sign In")).click()
    await driver.findElement(By.id("username")).sendKeys("coucou")
    await driver.findElement(By.id("password")).sendKeys("h")
    await driver.findElement(By.id("password")).sendKeys(Key.ENTER)
    await driver.findElement(By.linkText("Details")).click()
    await driver.findElement(By.linkText("Tasks")).click()
    await driver.findElement(By.linkText("Ajouter tache")).click()
    await driver.findElement(By.id("taskName")).click()
    await driver.findElement(By.id("taskName")).sendKeys("Test")
    await driver.findElement(By.id("taskDescription")).click()
    await driver.findElement(By.id("taskDescription")).sendKeys("Je teste un truc")
    await driver.findElement(By.id("taskState1")).click()
    await driver.findElement(By.id("startDate")).click()
    await driver.findElement(By.id("startDate")).sendKeys("2019-11-21")
    await driver.findElement(By.id("taskDuration")).click()
    await driver.findElement(By.id("taskDuration")).sendKeys("1")
    await driver.findElement(By.id("taskDuration")).click()
    await driver.findElement(By.css(".form-group:nth-child(9)")).click()
    await driver.findElement(By.id("taskDoD")).click()
    await driver.findElement(By.id("taskDoD")).sendKeys("Je teste quelque chose")
    {
      const dropdown = await driver.findElement(By.id("taskMember"))
      await dropdown.findElement(By.xpath("//option[. = 'coucou']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskIssue"))
      await dropdown.findElement(By.xpath("//option[. = 'jkbhjv2']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskRequired"))
      await dropdown.findElement(By.xpath("//option[. = 'Update DataBase']")).click()
    }
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.linkText("Ajouter tache")).click()
    await driver.findElement(By.id("taskName")).click()
    await driver.findElement(By.id("taskName")).sendKeys("Test")
    await driver.findElement(By.id("taskName")).sendKeys(Key.DOWN)
    await driver.findElement(By.id("taskName")).sendKeys("Test")
    await driver.findElement(By.id("taskDescription")).click()
    await driver.findElement(By.id("taskDescription")).sendKeys("Je teste quelque chose")
    await driver.findElement(By.id("taskState2")).click()
    await driver.findElement(By.id("startDate")).click()
    await driver.findElement(By.id("startDate")).sendKeys("2019-11-08")
    await driver.findElement(By.id("taskDuration")).click()
    await driver.findElement(By.id("taskDuration")).sendKeys("1")
    await driver.findElement(By.id("taskDuration")).click()
    await driver.findElement(By.id("taskDuration")).sendKeys("2")
    await driver.findElement(By.id("taskDuration")).click()
    {
      const element = await driver.findElement(By.id("taskDuration"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("taskDoD")).click()
    await driver.findElement(By.id("taskDoD")).sendKeys("pojviojzfczfczq")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.linkText("Ajouter tache")).click()
    await driver.findElement(By.id("taskName")).click()
    await driver.findElement(By.id("taskName")).sendKeys("Test3")
    await driver.findElement(By.id("taskDescription")).click()
    await driver.findElement(By.id("taskDescription")).sendKeys("J^jfipezjf")
    await driver.findElement(By.css(".form-check:nth-child(5) > .form-check-label")).click()
    await driver.findElement(By.id("startDate")).click()
    await driver.findElement(By.id("startDate")).sendKeys("2019-11-08")
    await driver.findElement(By.id("taskDuration")).click()
    await driver.findElement(By.id("taskDuration")).sendKeys("0.5")
    await driver.findElement(By.id("taskDoD")).click()
    await driver.findElement(By.id("taskDuration")).sendKeys("1")
    await driver.findElement(By.id("taskDuration")).click()
    await driver.findElement(By.id("taskDoD")).sendKeys("nyj,ukiulkuyhtgrsdvgnft")
    await driver.findElement(By.id("taskMember")).click()
    {
      const dropdown = await driver.findElement(By.id("taskRequired"))
      await dropdown.findElement(By.xpath("//option[. = 'Test']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskRequired"))
      await dropdown.findElement(By.xpath("//option[. = 'Test']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskRequired"))
      await dropdown.findElement(By.xpath("//option[. = 'Test']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskRequired"))
      await dropdown.findElement(By.xpath("//option[. = 'Update DataBase']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskRequired"))
      await dropdown.findElement(By.xpath("//option[. = 'Test']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskRequired"))
      await dropdown.findElement(By.xpath("//option[. = 'Update DataBase']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskRequired"))
      await dropdown.findElement(By.xpath("//option[. = 'Test']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskRequired"))
      await dropdown.findElement(By.xpath("//option[. = 'Test']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskRequired"))
      await dropdown.findElement(By.xpath("//option[. = 'Update DataBase']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskIssue"))
      await dropdown.findElement(By.xpath("//option[. = 'jkbhjv2']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskIssue"))
      await dropdown.findElement(By.xpath("//option[. = 'gbdvfc']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("taskMember"))
      await dropdown.findElement(By.xpath("//option[. = 'coucou']")).click()
    }
    await driver.findElement(By.css(".btn-primary")).click()
  })
})
