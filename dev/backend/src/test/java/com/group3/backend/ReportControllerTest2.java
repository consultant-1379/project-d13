package com.group3.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ReportControllerTest2 {

    ReportController reportController = new ReportController();

    @Test
    void testGetResultInstance() {
        Answer answer = createNewAnswer();
        Result expectedResult = new Result(100, 50, 75, 62, 62, 62, 62, 100, 100);
        assertEquals(expectedResult, reportController.getResultInstance(answer));
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
}
