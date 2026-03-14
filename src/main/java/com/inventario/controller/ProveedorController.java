package com.inventario.controller;

import com.inventario.entity.Proveedor;
import com.inventario.repository.ProveedorRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/proveedores")
@CrossOrigin("*")
public class ProveedorController {

    private final ProveedorRepository repo;

    public ProveedorController(ProveedorRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Proveedor> listar(){
        return repo.findAll();
    }

    @PostMapping
    public Proveedor guardar(@RequestBody Proveedor proveedor){
        return repo.save(proveedor);
    }

}