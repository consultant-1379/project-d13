package com.group3.backend;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.assertj.core.internal.bytebuddy.matcher.ElementMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
@WebMvcTest(ReportController.class)
public class ReportControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper mapper;

    @MockBean
    ReportRepository reportRepository;
    @MockBean
    ResultRepository resultRepository;
    @MockBean
    ReportController reportController;

    ReportController reportController2 = new ReportController();




    @Test
    void testGetReport() {
        Report report = new Report("Report1");
        assertEquals("Report1", report.getReportName());
    }

    @Test
    void testSetReport() {
        Report report = new Report();
        report.setReportName("Report1");
        assertEquals("Report1", report.getReportName());
    }
    @Test
    void testGetResult()
    {
        Result result = new Result(10, 20, 30, 40, 50, 60, 70, 80, 90);
        Report report = new Report("Report1");
        report.setResult(result);
        assertEquals(result, report.getResult());
    }
    @Test
    void testresultclass()
    {
        Result result = new Result(10, 20, 30, 40, 50, 60, 70, 80, 90);
        result.setReportId(10);
        result.setCulture(100);
        result.setServDesign(30);
        result.setTeam(35);
        result.setProcess(37);
        result.setArchitecture(54);
        result.setMaintenance(51);
        result.setDelivery(31);
        result.setProvisioning(41);
        result.setInfrastructure(81);
        assertEquals(81,result.getInfrastructure());
        assertEquals(41,result.getProvisioning());
        assertEquals(31,result.getDelivery());
        assertEquals(51,result.getMaintenance());
        assertEquals(54, result.getArchitecture());
        assertEquals(37,result.getProcess());
        assertEquals(35,result.getTeam());

        assertEquals(30,result.getServDesign());
        assertEquals(100,result.getCulture());
        assertEquals(10,result.getReportId());
    }
    @Test
    void testGetResultInstance() {
        Answer answer = createNewAnswer();
        Result expectedResult = new Result(100, 50, 75, 62, 62, 62, 62, 100, 100);
        assertEquals(expectedResult, reportController2.getResultInstance(answer));
    }


    Answer createNewAnswer() {
        Answer answer = new Answer();
        answer.setAnswer100(true); // 100
        answer.setAnswer101(false);
        answer.setAnswer102(false);
        answer.setAnswer103(false);
        answer.setAnswer104(false);
        answer.setAnswer200(false); // 50
        answer.setAnswer201(true);
        answer.setAnswer202(false);
        answer.setAnswer203(true);
        answer.setAnswer204(false);
        answer.setAnswer300(false); // 75
        answer.setAnswer301(false);
        answer.setAnswer302(true);
        answer.setAnswer303(false);
        answer.setAnswer304(true);
        answer.setAnswer400(false); // 62
        answer.setAnswer401(false);
        answer.setAnswer402(false);
        answer.setAnswer403(false);
        answer.setAnswer404(false);
        answer.setAnswer500(false);
        answer.setAnswer501(true); // 62
        answer.setAnswer502(true);
        answer.setAnswer503(true);
        answer.setAnswer504(true);
        answer.setAnswer600(false); // 62
        answer.setAnswer601(false);
        answer.setAnswer602(true);
        answer.setAnswer603(true);
        answer.setAnswer604(true);
        answer.setAnswer700(false); // 62
        answer.setAnswer701(true);
        answer.setAnswer702(false);
        answer.setAnswer703(true);
        answer.setAnswer704(true);
        answer.setAnswer800(true);
        answer.setAnswer801(false);
        answer.setAnswer802(false);
        answer.setAnswer803(false);
        answer.setAnswer804(false);
        answer.setAnswer900(true);
        answer.setAnswer901(false);
        answer.setAnswer902(false);
        answer.setAnswer903(false);
        answer.setAnswer904(false);
        return answer;
    }
    @Test
    void testDoDatabaseOps() {
        Result result = new Result(10, 20, 30, 40, 50, 60, 70, 80, 90);
        Report report = new Report("Report1");
        Report savedReport = reportController.doDatabaseOps(report, result);
        report.setResult(result);
        reportRepository.save(report);
        assertEquals(savedReport, reportRepository.findReportByReportName("Report1"));
    }


}