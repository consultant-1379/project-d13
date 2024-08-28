package com.group3.backend;
import org.springframework.data.repository.CrudRepository;

public interface ReportRepository extends CrudRepository<Report, Long> {
    Report findReportByReportName(String reportName);
}
