package com.inventario.controller;

import com.inventario.entity.Categoria;
import com.inventario.repository.CategoriaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
@CrossOrigin("*")
public class CategoriaController {
    private final CategoriaRepository repo;

    public CategoriaController(CategoriaRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Categoria> listar(){
        return repo.findAll();
    }

    @PostMapping
    public Categoria guardar(@RequestBody Categoria categoria){
        return repo.save(categoria);
    }
}
