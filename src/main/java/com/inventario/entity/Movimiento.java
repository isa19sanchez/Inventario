package com.inventario.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "CBA_movimiento")
public class Movimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_movimiento;

    private Long id_producto;

    private String tipo;

    private int cantidad;

    private LocalDateTime fecha;

}
