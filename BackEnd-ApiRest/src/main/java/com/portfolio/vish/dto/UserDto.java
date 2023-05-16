
package com.portfolio.vish.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

/**
 *
 * @author Vish
 */

public class UserDto {
    private int id;
    @NotNull
    @Size(min = 1, max = 200, message ="no cumple con la longitud")
    private String nombreuser;
    @NotNull
    @Size(min = 1, max = 100, message ="no cumple con la longitud")
    private String titulouser;
    @NotNull
    @Size(min = 1, max = 1000, message ="no cumple con la longitud")
    private String acercauser;
    @NotNull
    @NotBlank
    @Email(message = "email invalido")
    private String emailuser;
    @NotNull
    @Size(min = 1, max = 50, message ="no cumple con la longitud")
    private String imguser;

    public UserDto() {
    }

    public UserDto(int id, String nombreuser, String titulouser, String acercauser, String emailuser, String imguser) {
        this.id = id;
        this.nombreuser = nombreuser;
        this.titulouser = titulouser;
        this.acercauser = acercauser;
        this.emailuser = emailuser;
        this.imguser = imguser;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreuser() {
        return nombreuser;
    }

    public void setNombreuser(String nombreuser) {
        this.nombreuser = nombreuser;
    }

    public String getTitulouser() {
        return titulouser;
    }

    public void setTitulouser(String titulouser) {
        this.titulouser = titulouser;
    }

    public String getAcercauser() {
        return acercauser;
    }

    public void setAcercauser(String acercauser) {
        this.acercauser = acercauser;
    }

    public String getEmailuser() {
        return emailuser;
    }

    public void setEmailuser(String emailuser) {
        this.emailuser = emailuser;
    }

    public String getImguser() {
        return imguser;
    }

    public void setImguser(String imguser) {
        this.imguser = imguser;
    }
}