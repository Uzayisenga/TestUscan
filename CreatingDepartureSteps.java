package com.testautomation.stepdefinitions.SC;
 
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
 
import com.testautomation.pages.IR.LoginPage;
import com.testautomation.pages.SC.CreatingDeparturePage;
import com.testautomation.stepdefinitions.Hooks;
 
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
 
public class CreatingDepartureSteps {
 
    WebDriver driver;
    LoginPage loginPage;
    CreatingDeparturePage deptureCheck;
 
    public CreatingDepartureSteps() {
        this.driver = Hooks.driver;
        deptureCheck = new CreatingDeparturePage(driver);
    }
 
    @Given("surveillance agent is on OSCAR welcome page")
    public void surveillanceAgentIsOnOSCARWelcomePage() {
        loginPage = new LoginPage(driver);
        loginPage.login();
    }
 
    @And("clicks on + icon on on the left navigation of surveillance check link")
    public void clicksOnPlusIconOnTheLeftNavigation() throws InterruptedException {
        deptureCheck.DepClicksOnSurveillIcon();
    }
 
    @And("select Departure check")
    public void selectDepartureCheck() throws InterruptedException {
        deptureCheck.selectCheckTypeAsDeparture();
    }
 
    @And("select flight")
    public void selectFlight() {
        deptureCheck.DepselectionOfFlightInfo();
    }
 
    @When("surveillance agent clicks Start button")
    public void surveillanceAgentClicksStartButton() {
        deptureCheck.DepclickStartCheckBttn();
    }
 
    @Then("check must be created showing snackbar message {string}")
    public void checkMustBeCreatedShowingSnackbarMessage(String expectedMessage) {
        String actualMessage = deptureCheck.DepgetSnackbarMssg();
        Assert.assertEquals(actualMessage, expectedMessage, "Snackbar message mismatch!");
    }
 
    @And("check must have {string} as Status")
    public void checkMustHaveAsStatus(String expectedStatus) {
        boolean actualStatus = deptureCheck.getDepartureCheckStatus(expectedStatus);
        Assert.assertTrue(actualStatus, expectedStatus);
    }
 
}
 