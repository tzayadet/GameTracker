package com.zyane.gt.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "audit_logs")
public class AuditLog {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String userId;
    private String action;
    private String entityType;
    private String entityId;

    @Column(length = 45)
    private String ipAddress;

    @Column(columnDefinition = "text")
    private String oldData;

    @Column(columnDefinition = "text")
    private String newData;

    private Instant timestamp = Instant.now();
}
