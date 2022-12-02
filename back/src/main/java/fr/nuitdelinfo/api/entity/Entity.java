package fr.nuitdelinfo.api.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Set;

@jakarta.persistence.Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Entity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_e")
    private Integer id;

    @Column(length = 40)
    private String libelle;

    private Integer cost;

    private Integer damage;

    private Integer speed;

    private Integer life;

    private Float spawnRate;

    private Boolean evil;

    @JsonManagedReference
    @OneToMany(mappedBy = "entity")
    private Set<Powerup> powerups;
}
