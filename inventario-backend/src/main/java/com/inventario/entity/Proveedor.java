package com.inventario.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "CBA_proveedores")
@Data
public class Proveedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_proveedor;

    private String nombre;

    private String telefono;

    private String email;

    private String direccion;
}
