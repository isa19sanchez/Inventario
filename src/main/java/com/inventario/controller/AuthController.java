package com.inventario.controller;

import com.inventario.entity.Usuario;
import com.inventario.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthService service;

    @PostMapping("/register")
    public Usuario register(@RequestBody Usuario user) {
        return service.registrar(user);
    }

    @PostMapping("/login")
    public Usuario login(@RequestBody Usuario user) {
        return service.login(user.getEmail(), user.getPassword());
    }
}