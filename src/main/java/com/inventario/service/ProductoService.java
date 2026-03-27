package com.inventario.service;

import com.inventario.entity.Producto;
import com.inventario.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository repository;

    // Obtener todos los productos
    public List<Producto> listar() {
        return repository.findAll();
    }

    // Obtener producto por ID
    public Producto obtenerPorId(Long id) {
        Optional<Producto> producto = repository.findById(id);
        return producto.orElse(null);
    }

    // Guardar producto
    public Producto guardar(Producto producto) {
        return repository.save(producto);
    }

    // Actualizar producto
    public Producto actualizar(Long id, Producto nuevoProducto) {
        Producto producto = repository.findById(id).orElse(null);

        if (producto != null) {
            producto.setNombre(nuevoProducto.getNombre());
            producto.setDescripcion(nuevoProducto.getDescripcion());
            producto.setPrecio(nuevoProducto.getPrecio());
            producto.setStock(nuevoProducto.getStock());

            return repository.save(producto);
        }

        return null;
    }

    // Eliminar producto
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}