package com.inventario.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "movimiento")
public class Movimiento {

    @Transient
    private Long productoId;

    public Long getProductoId() {
        return productoId;
    }

    public void setProductoId(Long productoId) {
        this.productoId = productoId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_movimiento;

    private String tipo;
    private int cantidad;


    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Producto producto;

    public Long getId() {
        return id_movimiento;
    }

    public void setId(Long id) {
        this.id_movimiento = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}
