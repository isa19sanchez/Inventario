package com.inventario.service;

import com.inventario.entity.Usuario;
import com.inventario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository repo;

    public Usuario registrar(Usuario user) {
        return repo.save(user);
    }

    public Usuario login(String email, String password) {
        Usuario user = repo.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }
}