package com.group3.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReportController {

    @Autowired
    ResultRepository resultRepository;
    @Autowired
    ReportRepository reportRepository;

    public Report currentReport;

    private static int id;

    private Answer answers;

    @CrossOrigin(origins = "http://localhost:8081")
    @PostMapping(value = "/data", produces = "application/json")
    public Report processQuestionnaire(@RequestBody Answer answers) {
        this.answers = answers;
        Result result = getResultInstance(answers);
        Report report = new Report("Report" + id);
        report.setResult(result);
        this.currentReport = report;
        id++;
        doDatabaseOps(report, result);
        return currentReport;
    }

    @CrossOrigin(origins = "http://localhost:8081")
    @GetMapping(value = "/data", produces = "application/json")
    public Report displayReport() {
        return currentReport;
    }

    public int processAnswers(Boolean zero, Boolean one, Boolean two, Boolean three, Boolean four) {
        if (zero) {
            return 100;
        } else if (((one && three) || (one || three)) && (!two && !four)) {
            return 50;
        } else if (((two && four) || (two || four)) && (!one && !three)) {
            return 75;
        } else {
          return 62;
        }
    }

    public Result getResultInstance(Answer answers) {
        return new Result(
                processAnswers(
                        answers.getAnswer100(),
                        answers.getAnswer101(),
                        answers.getAnswer102(),
                        answers.getAnswer103(),
                        answers.getAnswer104()),
                processAnswers(
                        answers.getAnswer200(),
                        answers.getAnswer201(),
                        answers.getAnswer202(),
                        answers.getAnswer203(),
                        answers.getAnswer204()),
                processAnswers(
                        answers.getAnswer300(),
                        answers.getAnswer301(),
                        answers.getAnswer302(),
                        answers.getAnswer303(),
                        answers.getAnswer304()),
                processAnswers(
                        answers.getAnswer400(),
                        answers.getAnswer401(),
                        answers.getAnswer402(),
                        answers.getAnswer403(),
                        answers.getAnswer404()),
                processAnswers(
                        answers.getAnswer500(),
                        answers.getAnswer501(),
                        answers.getAnswer502(),
                        answers.getAnswer503(),
                        answers.getAnswer504()),
                processAnswers(
                        answers.getAnswer600(),
                        answers.getAnswer601(),
                        answers.getAnswer602(),
                        answers.getAnswer603(),
                        answers.getAnswer604()),
                processAnswers(
                        answers.getAnswer700(),
                        answers.getAnswer701(),
                        answers.getAnswer702(),
                        answers.getAnswer703(),
                        answers.getAnswer704()),
                processAnswers(
                        answers.getAnswer800(),
                        answers.getAnswer801(),
                        answers.getAnswer802(),
                        answers.getAnswer803(),
                        answers.getAnswer804()),
                processAnswers(
                        answers.getAnswer900(),
                        answers.getAnswer901(),
                        answers.getAnswer902(),
                        answers.getAnswer903(),
                        answers.getAnswer904())
        );
    }

    public Report doDatabaseOps(Report report, Result result) {
        resultRepository.save(result);
        report.setResult(result);
        reportRepository.save(report);

        return report;
    }
}
