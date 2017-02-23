package ghostdriver;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class GhostDriverIssue {

    @Test
    public void demonstrateIssue() {
        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        capabilities.setJavascriptEnabled(true);
        RemoteWebDriver driver = new PhantomJSDriver(capabilities);

        driver.get("http://www.turkpatent.gov.tr/TurkPatent/attorneysearchAll/");

        List<WebElement> rows = driver.findElement(By.cssSelector("[id='t01']")).findElements(By.cssSelector("tr"));

        int rowIndex = 1; // skip header.
        List<WebElement> row = rows.get(rowIndex).findElements(By.cssSelector("td"));
        assertThat(row.size()).isEqualTo(7); // all cells are found.
        assertThat(row.get(2).getText()).isNotEmpty(); // 'Vekil Firma' is found.
        assertThat(row.get(4).getText()).isNotEmpty(); // but cannot read the next cell's text - 'Vekil Adres'.
    }
}