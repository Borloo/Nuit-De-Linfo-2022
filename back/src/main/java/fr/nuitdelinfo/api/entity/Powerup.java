package fr.nuitdelinfo.api.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Powerup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_p")
    private Integer id;

    @Column(length = 40)
    private String libelle;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "id_e", nullable = false)
    private fr.nuitdelinfo.api.entity.Entity entity;
}
