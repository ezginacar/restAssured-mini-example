package stepDefinitions.hook;

import base.BaseTest;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class BeforeAfterTest extends BaseTest {

    @Before
    public void beforeAll(){
        init();
    }

    @After
    public void  afterAll(){response = null;}


}
