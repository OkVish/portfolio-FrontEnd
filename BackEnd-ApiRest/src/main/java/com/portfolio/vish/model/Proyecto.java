
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
public class Proyecto {
       @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
       private int id;
    private String nombrepr;
    private String urlgit;
    private String urlpr;
    private String imgurl;

    public Proyecto() {
    }

    public Proyecto(int id, String nombrepr, String urlgit, String urlpr, String imgurl) {
        this.id = id;
        this.nombrepr = nombrepr;
        this.urlgit = urlgit;
        this.urlpr = urlpr;
        this.imgurl = imgurl;
    }

    
}