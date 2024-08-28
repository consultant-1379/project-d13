package com.group3.backend;

import org.springframework.data.repository.CrudRepository;

public interface ResultRepository extends CrudRepository<Result, Long> {

    Result findByCultureAndServDesignAndTeamAndProcessAndArchitectureAndMaintenanceAndDeliveryAndProvisioningAndInfrastructure(
            int culture, int servDesign, int team,
            int process, int architecture, int maintenance,
            int delivery, int provisioning, int infrastructure
    );
}
