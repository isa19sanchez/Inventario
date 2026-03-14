package com.inventario.controller;

import com.inventario.entity.Movimiento;
import com.inventario.repository.MovimientoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movimientos")
@CrossOrigin("*")
public class MovimientoController {
    private final MovimientoRepository repo;
    public MovimientoController(MovimientoRepository repo) {
        this.repo = repo;
    }
    @GetMapping
    public List <Movimiento> listar(){
        return repo.findAll();
    }

    @PostMapping
    public Movimiento guardar(@RequestBody Movimiento movimiento){
        return repo.save(movimiento);
    }
}
