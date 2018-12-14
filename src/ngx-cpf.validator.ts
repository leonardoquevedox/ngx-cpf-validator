
import { FormControl, Validator } from '@angular/forms'
import CPF from 'gerador-validador-cpf'

export class CpfValidator implements Validator {
    validate(control: FormControl) {
        let cpf = control.value
        if (cpf && !CPF.validate(cpf)) {
            return { cpf: { error: 'Whoops! This cpf number is not valid )' } }
        }
        return null
    }
}