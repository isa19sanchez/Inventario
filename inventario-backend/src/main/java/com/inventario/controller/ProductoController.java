package com.inventario.controller;

import com.inventario.entity.Producto;
import com.inventario.repository.ProductoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping ("/productos")
@CrossOrigin ("*")
public class ProductoController {
    private final ProductoRepository repo;

    public ProductoController(ProductoRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Producto> listar(){
        return repo.findAll();
    }

    @PostMapping
    public Producto guardar(@RequestBody Producto producto){
        return repo.save(producto);
    }

    @PutMapping("/{id}")
    public Producto actualizar(@PathVariable Long id, @RequestBody Producto producto){
        producto.setId_producto(id);
        return repo.save(producto);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id){
        repo.deleteById(id);
    }
}
