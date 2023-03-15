package com.portfoliovish.vish.Interface;

import com.portfoliovish.vish.Entity.Persona;
import java.util.List;

import java.util.List;

public interface interface_persona_service {
    //Traer una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto pero lo buscamos por ID
    public void deletePersona(Long id);
    
    //Buscar una persona por ID
    public Persona findPersona(Long id);
}
