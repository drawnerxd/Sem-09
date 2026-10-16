import { Service } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Service()
export class PersonaService {
    private personaDB: Persona[] = []

    guardar(persona:Persona) {
        this.personaDB.push(persona)
    }

    mostrar(){
        return this.personaDB
    }
}
