package com.inventario.service;

import com.inventario.entity.Movimiento;
import com.inventario.entity.Producto;
import com.inventario.repository.MovimientoRepository;
import com.inventario.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovimientoService {

    @Autowired
    private MovimientoRepository repo;

    @Autowired
    private ProductoRepository productoRepo;

    public Movimiento guardar(Movimiento m, Long productoId) {

        Producto p = productoRepo.findById(productoId).orElse(null);

        if (p != null) {

            if (m.getTipo().equals("ENTRADA")) {
                p.setStock(p.getStock() + m.getCantidad());
            } else {
                p.setStock(p.getStock() - m.getCantidad());
            }

            m.setProducto(p);
            productoRepo.save(p);
        }

        return repo.save(m);
    }

    public List<Movimiento> listar() {
        return repo.findAll();
    }
}