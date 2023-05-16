
package com.portfolio.vish.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Vish
 */
@Getter @Setter
@Entity
public class Experiencia {
   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private int id;
   private String nombreexp;
   private String descripcionexp;
   private String badges;
   private String inicioexp;
   private String finexp;

    public Experiencia() {
    }

    public Experiencia(int id, String nombreexp, String descripcionexp, String badges, String inicioexp, String finexp) {
        this.id = id;
        this.nombreexp = nombreexp;
        this.descripcionexp = descripcionexp;
        this.badges = badges;
        this.inicioexp = inicioexp;
        this.finexp = finexp;
    }

   
   
}
