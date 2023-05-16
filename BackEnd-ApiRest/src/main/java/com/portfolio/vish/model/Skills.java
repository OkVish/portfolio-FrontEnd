
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
public class Skills {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private int id;
     private String nombreskill;
     private String porcentajeskill;
     private String imgurl;

    public Skills() {
    }

    public Skills(int id, String nombreskill, String porcentajeskill, String imgurl) {
        this.id = id;
        this.nombreskill = nombreskill;
        this.porcentajeskill = porcentajeskill;
        this.imgurl = imgurl;
    }    
     
}
