
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
public class Educacion {
    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreedu;
    private String lugaredu;
    private String cursoedu;
    private String urledu;

    public Educacion() {
    }

    public Educacion(int id, String nombreedu, String lugaredu, String cursoedu, String urledu) {
        this.id = id;
        this.nombreedu = nombreedu;
        this.lugaredu = lugaredu;
        this.cursoedu = cursoedu;
        this.urledu = urledu;
    }

    
}
