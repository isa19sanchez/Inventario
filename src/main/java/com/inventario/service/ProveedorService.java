package com.inventario.service;

import com.inventario.entity.Proveedor;
import com.inventario.repository.ProveedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProveedorService {

    @Autowired
    private ProveedorRepository repository;

    // Listar todos
    public List<Proveedor> listar() {
        return repository.findAll();
    }

    // Obtener por ID
    public Proveedor obtenerPorId(Long id) {
        Optional<Proveedor> proveedor = repository.findById(id);
        return proveedor.orElse(null);
    }

    // Guardar
    public Proveedor guardar(Proveedor proveedor) {
        return repository.save(proveedor);
    }

    // Actualizar
    public Proveedor actualizar(Long id, Proveedor nuevoProveedor) {
        Proveedor proveedor = repository.findById(id).orElse(null);

        if (proveedor != null) {
            proveedor.setNombre(nuevoProveedor.getNombre());
            proveedor.setTelefono(nuevoProveedor.getTelefono());
            proveedor.setEmail(nuevoProveedor.getEmail());
            proveedor.setDireccion(nuevoProveedor.getDireccion());

            return repository.save(proveedor);
        }

        return null;
    }

    // Eliminar
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}