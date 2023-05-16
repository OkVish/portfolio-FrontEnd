
package com.portfolio.vish.dto;

import jakarta.validation.constraints.NotBlank;

/**
 *
 * @author Vish
 */
public class EducacionDto {
     @NotBlank
    private String nombreedu;
     @NotBlank
    private String lugaredu;
      @NotBlank
    private String cursoedu;
       @NotBlank
    private String urledu;

    public EducacionDto() {
    }

    public EducacionDto(String nombreedu, String lugaredu, String cursoedu, String urledu) {
        this.nombreedu = nombreedu;
        this.lugaredu = lugaredu;
        this.cursoedu = cursoedu;
        this.urledu = urledu;
    }

    public String getNombreedu() {
        return nombreedu;
    }

    public void setNombreedu(String nombreedu) {
        this.nombreedu = nombreedu;
    }

    public String getLugaredu() {
        return lugaredu;
    }

    public void setLugaredu(String lugaredu) {
        this.lugaredu = lugaredu;
    }

    public String getCursoedu() {
        return cursoedu;
    }

    public void setCursoedu(String cursoedu) {
        this.cursoedu = cursoedu;
    }

    public String getUrledu() {
        return urledu;
    }

    public void setUrledu(String urledu) {
        this.urledu = urledu;
    }

    
}