package com.inventario.controller;

import com.inventario.entity.Movimiento;
import com.inventario.repository.MovimientoRepository;
import com.inventario.service.MovimientoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movimientos")
@CrossOrigin("*")
public class MovimientoController {

    @Autowired
    private MovimientoService service;

    @GetMapping
    public List<Movimiento> listar() {
        return service.listar();
    }

    @PostMapping
    public Movimiento guardar(@RequestBody Movimiento m) {
        return service.guardar(m, m.getProductoId());
    }
}