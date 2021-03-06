// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('004_newProjectAndDeleteProject', function() {
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
  it('004_newProjectAndDeleteProject', async function() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.linkText("Sign In")).click()
    await driver.findElement(By.id("username")).sendKeys("Test")
    await driver.findElement(By.css("form")).click()
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("test")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.linkText("New Project")).click()
    await driver.findElement(By.id("projectName")).click()
    await driver.findElement(By.id("projectName")).sendKeys("Test with github")
    await driver.findElement(By.id("projectDescription")).click()
    await driver.findElement(By.id("projectDescription")).sendKeys("Project with github and members")
    await driver.findElement(By.id("userGitHub")).click()
    await driver.findElement(By.id("userGitHub")).sendKeys("username")
    await driver.findElement(By.id("repositoryGitHub")).click()
    await driver.findElement(By.id("repositoryGitHub")).sendKeys("repo")
    await driver.findElement(By.id("usernameMemberToAdd")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).sendKeys("User5")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).sendKeys("user1")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css("li > .btn-outline-danger")).click()
    await driver.findElement(By.css(".btn:nth-child(2)")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).sendKeys("User5")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).sendKeys("user1")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.id("createNewProject")).click()
    await driver.findElement(By.linkText("Manage Projects")).click()
    await driver.findElement(By.linkText("New Project")).click()
    await driver.findElement(By.id("projectName")).click()
    await driver.findElement(By.id("projectName")).sendKeys("Test without github")
    await driver.findElement(By.id("projectDescription")).click()
    await driver.findElement(By.id("projectDescription")).sendKeys("Project without github and member")
    await driver.findElement(By.id("usernameMemberToAdd")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).sendKeys("User5")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).sendKeys("user1")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css("li > .btn-outline-danger")).click()
    await driver.findElement(By.css(".btn:nth-child(2)")).click()
    await driver.findElement(By.id("createNewProject")).click()
    await driver.findElement(By.linkText("Manage Projects")).click()
    await driver.findElement(By.css("li:nth-child(2) > .row form > .btn")).click()
    await driver.switchTo().alert().accept()
    await driver.wait(until.elementLocated(By.xpath("(//button[@type=\'submit\'])[3]")), 30000)
    await driver.findElement(By.xpath("(//button[@type=\'submit\'])[3]")).click()
    await driver.switchTo().alert().accept()
    await driver.wait(until.elementLocated(By.linkText("New Project")), 30000)
    await driver.findElement(By.linkText("New Project")).click()
    await driver.findElement(By.id("projectName")).click()
    await driver.findElement(By.id("projectName")).sendKeys("Project for tests")
    await driver.findElement(By.id("projectDescription")).click()
    await driver.findElement(By.id("projectDescription")).sendKeys("Project used to test the appli")
    await driver.findElement(By.id("userGitHub")).click()
    await driver.findElement(By.id("userGitHub")).sendKeys("username")
    await driver.findElement(By.id("repositoryGitHub")).click()
    await driver.findElement(By.id("repositoryGitHub")).sendKeys("repo")
    await driver.findElement(By.id("usernameMemberToAdd")).click()
    await driver.findElement(By.id("usernameMemberToAdd")).sendKeys("User5")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.id("createNewProject")).click()
    await driver.findElement(By.name("signout")).click()
  })
})
