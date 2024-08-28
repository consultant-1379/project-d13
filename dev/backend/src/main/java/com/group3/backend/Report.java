package com.group3.backend;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="report")
public class Report {
    public long getReportId() {
        return reportId;
    }

    @Id
    @GeneratedValue
    @Column(name="id")
    private long reportId;
    @Column(name="report_name")
    private String reportName;
    @ManyToOne
    @JoinColumn(name = "result_id")
    private Result result;

    public Report() {
    }

    public Report(String reportName) {
        this.reportName = reportName;
    }

    public String getReportName() {
        return reportName;
    }

    public void setReportName(String reportName) {
        this.reportName = reportName;
    }

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return "Report{" +
                "reportId=" + reportId +
                ", reportName='" + reportName + '\'' +
                ", result=" + result +
                '}';
    }

}
