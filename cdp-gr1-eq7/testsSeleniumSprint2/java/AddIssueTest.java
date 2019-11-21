// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
public class AddIssueTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new FirefoxDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void addIssue() {
    driver.get("http://localhost:3000/");
    driver.manage().window().setSize(new Dimension(1251, 722));
    driver.findElement(By.linkText("Manage Projects")).click();
    driver.findElement(By.cssSelector("li:nth-child(2) .list-inline-item > .btn")).click();
    driver.findElement(By.linkText("Issues")).click();
    driver.findElement(By.linkText("Add Issue")).click();
    driver.findElement(By.id("issueName")).click();
    driver.findElement(By.id("issueName")).sendKeys("I1");
    driver.findElement(By.id("issuePriority")).click();
    driver.findElement(By.id("issuePriority")).sendKeys("LOW");
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.id("issueDifficulty")).sendKeys("1");
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.id("issueDescription")).click();
    driver.findElement(By.id("issueDescription")).sendKeys("Test");
    driver.findElement(By.cssSelector(".float-right")).click();
    driver.findElement(By.linkText("Add Issue")).click();
    driver.findElement(By.id("issueName")).click();
    driver.findElement(By.id("issueName")).sendKeys("I2");
    driver.findElement(By.id("issuePriority")).click();
    driver.findElement(By.id("issuePriority")).sendKeys("HIGH");
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.id("issueDifficulty")).sendKeys("0");
    driver.findElement(By.id("issueDescription")).click();
    driver.findElement(By.id("issueDescription")).sendKeys("Test2");
    driver.findElement(By.cssSelector(".float-right:nth-child(1)")).click();
    driver.findElement(By.linkText("Add Issue")).click();
    driver.findElement(By.id("issueName")).click();
    driver.findElement(By.id("issueName")).sendKeys("I3");
    driver.findElement(By.id("issuePriority")).click();
    driver.findElement(By.id("issueDifficulty")).sendKeys("1");
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.id("issueDifficulty")).sendKeys("2");
    driver.findElement(By.id("issueDifficulty")).click();
    {
      WebElement element = driver.findElement(By.id("issueDifficulty"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    driver.findElement(By.id("issueDifficulty")).sendKeys("3");
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.id("issueDifficulty")).sendKeys("4");
    driver.findElement(By.id("issueDifficulty")).click();
    {
      WebElement element = driver.findElement(By.id("issueDifficulty"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    driver.findElement(By.id("issueDifficulty")).sendKeys("5");
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.id("issueDifficulty")).sendKeys("6");
    driver.findElement(By.id("issueDifficulty")).click();
    {
      WebElement element = driver.findElement(By.id("issueDifficulty"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    driver.findElement(By.id("issuePriority")).sendKeys("MEDIUM");
    driver.findElement(By.id("issueDescription")).click();
    driver.findElement(By.id("issueDescription")).sendKeys("Test3");
    driver.findElement(By.cssSelector(".float-right:nth-child(1)")).click();
    driver.findElement(By.linkText("Add Issue")).click();
    driver.findElement(By.id("issueName")).click();
    driver.findElement(By.id("issueName")).sendKeys("False Priority");
    driver.findElement(By.id("issuePriority")).click();
    driver.findElement(By.id("issuePriority")).sendKeys("frgh,j;kj");
    driver.findElement(By.cssSelector(".badge:nth-child(8)")).click();
    driver.findElement(By.id("issueDifficulty")).sendKeys("1");
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.id("issueDescription")).click();
    driver.findElement(By.id("issueDescription")).sendKeys("Test false priority");
    driver.findElement(By.cssSelector(".float-right:nth-child(1)")).click();
    driver.findElement(By.linkText("Add Issue")).click();
    driver.findElement(By.id("issueName")).click();
    driver.findElement(By.id("issueName")).sendKeys("False Difficulty");
    driver.findElement(By.id("issuePriority")).click();
    driver.findElement(By.id("issuePriority")).sendKeys("HIGH");
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.id("issueDescription")).click();
    driver.findElement(By.id("issueDescription")).sendKeys("Test False Difficulty");
    driver.findElement(By.cssSelector(".float-right:nth-child(1)")).click();
    {
      WebElement element = driver.findElement(By.id("issueDifficulty"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).clickAndHold().perform();
    }
    {
      WebElement element = driver.findElement(By.id("issueDifficulty"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.id("issueDifficulty"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).release().perform();
    }
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.cssSelector(".float-right:nth-child(1)")).click();
    {
      WebElement element = driver.findElement(By.id("issueDifficulty"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).clickAndHold().perform();
    }
    {
      WebElement element = driver.findElement(By.id("issueDifficulty"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.id("issueDifficulty"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).release().perform();
    }
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.cssSelector(".float-right:nth-child(1)")).click();
    driver.findElement(By.id("issueDifficulty")).sendKeys("0");
    driver.findElement(By.cssSelector(".float-right:nth-child(1)")).click();
    driver.findElement(By.linkText("Add Issue")).click();
    driver.findElement(By.id("issueName")).click();
    driver.findElement(By.id("issueName")).sendKeys("No description");
    driver.findElement(By.id("issuePriority")).click();
    driver.findElement(By.id("issueDifficulty")).sendKeys("1");
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.id("issuePriority")).sendKeys("HIGH");
    driver.findElement(By.id("issueDescription")).click();
    driver.findElement(By.cssSelector(".float-right:nth-child(1)")).click();
    driver.findElement(By.id("issueDescription")).sendKeys("Description");
    driver.findElement(By.cssSelector(".float-right:nth-child(1)")).click();
    driver.findElement(By.linkText("Add Issue")).click();
    driver.findElement(By.id("issueDescription")).click();
    driver.findElement(By.id("issueDescription")).sendKeys("No name");
    driver.findElement(By.id("issuePriority")).click();
    driver.findElement(By.id("issueDifficulty")).sendKeys("1");
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.id("issueDifficulty")).sendKeys("2");
    driver.findElement(By.id("issueDifficulty")).click();
    {
      WebElement element = driver.findElement(By.id("issueDifficulty"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    driver.findElement(By.id("issueDifficulty")).sendKeys("3");
    driver.findElement(By.id("issueDifficulty")).click();
    driver.findElement(By.id("issueDifficulty")).sendKeys("4");
    driver.findElement(By.id("issueDifficulty")).click();
    {
      WebElement element = driver.findElement(By.id("issueDifficulty"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    driver.findElement(By.id("issuePriority")).sendKeys("LOW");
    driver.findElement(By.cssSelector(".float-right:nth-child(1)")).click();
    driver.findElement(By.id("issueName")).sendKeys("Name");
    {
      WebElement element = driver.findElement(By.cssSelector(".float-right:nth-child(1)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).clickAndHold().perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".float-right:nth-child(1)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".float-right:nth-child(1)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).release().perform();
    }
    driver.findElement(By.cssSelector(".float-right:nth-child(1)")).click();
  }
}