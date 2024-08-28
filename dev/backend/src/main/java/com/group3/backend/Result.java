package com.group3.backend;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "result")
public class Result {

    @Id
    @GeneratedValue
    @Column(name="id")
    private long resultId;
    private  int culture;
    @Column(name="service_design")
    private  int servDesign;
    private  int team;
    private  int process;
    private  int architecture;
    private  int maintenance;
    private  int delivery;
    private  int provisioning;
    private  int infrastructure;

    @OneToMany(mappedBy = "result", cascade = CascadeType.PERSIST)
    List<Report> reports = new ArrayList<>();

    public Result() {
    }

    public Result(int culture, int servDesign, int team, int process,
                  int architecture, int maintenance, int delivery,
                  int provisioning, int infrastructure) {
        this.culture = culture;
        this.servDesign = servDesign;
        this.team = team;
        this.process = process;
        this.architecture = architecture;
        this.maintenance = maintenance;
        this.delivery = delivery;
        this.provisioning = provisioning;
        this.infrastructure = infrastructure;
    }

    public long getReportId() {
        return resultId;
    }

    public void setReportId(long resultId) {
        this.resultId = resultId;
    }

    public int getCulture() {
        return culture;
    }

    public void setCulture(int culture) {
        this.culture = culture;
    }

    public int getServDesign() {
        return servDesign;
    }

    public void setServDesign(int servDesign) {
        this.servDesign = servDesign;
    }

    public int getTeam() {
        return team;
    }

    public void setTeam(int team) {
        this.team = team;
    }

    public int getProcess() {
        return process;
    }

    public void setProcess(int process) {
        this.process = process;
    }

    public int getArchitecture() {
        return architecture;
    }

    public void setArchitecture(int architecture) {
        this.architecture = architecture;
    }

    public int getMaintenance() {
        return maintenance;
    }

    public void setMaintenance(int maintenance) {
        this.maintenance = maintenance;
    }

    public int getDelivery() {
        return delivery;
    }

    public void setDelivery(int delivery) {
        this.delivery = delivery;
    }

    public int getProvisioning() {
        return provisioning;
    }

    public void setProvisioning(int provisioning) {
        this.provisioning = provisioning;
    }

    public int getInfrastructure() {
        return infrastructure;
    }

    public void setInfrastructure(int infrastructure) {
        this.infrastructure = infrastructure;
    }
    @Override
    public String toString() {
        return "Result{" +
                "resultId=" + resultId +
                ", culture=" + culture +
                ", servDesign=" + servDesign +
                ", team=" + team +
                ", process=" + process +
                ", architecture=" + architecture +
                ", maintenance=" + maintenance +
                ", delivery=" + delivery +
                ", provisioning=" + provisioning +
                ", infrastructure=" + infrastructure +
                '}';
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Result result = (Result) o;
        return resultId == result.resultId &&
                culture == result.culture &&
                servDesign == result.servDesign &&
                team == result.team &&
                process == result.process &&
                architecture == result.architecture &&
                maintenance == result.maintenance &&
                delivery == result.delivery &&
                provisioning == result.provisioning &&
                infrastructure == result.infrastructure &&
                Objects.equals(reports, result.reports);
    }

    @Override
    public int hashCode() {
        return Objects.hash(resultId, culture, servDesign, team, process, architecture, maintenance, delivery, provisioning, infrastructure, reports);
    }

}
