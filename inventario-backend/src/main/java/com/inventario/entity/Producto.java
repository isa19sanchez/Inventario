package com.inventario.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table (name = "CBA_productos")
@Data

public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_producto;

    private String nombre;

    private String descripcion;

    private double precio;

    private int stock;

}
