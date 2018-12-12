import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms'
import { Directive } from '@angular/core'
import * as CPF from '@fnando/cpf'

@Directive({
    selector: '[ngx-cpf][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: NgxCpfValidator,
            multi: true
        }
    ]
})
export class NgxCpfValidator implements Validator {
    validate(control: FormControl) {
        let cpf = control.value
        if (cpf && !CPF.isValid(cpf)) {
            return { cpf: { error: 'Whoops! This cpf number is not valid )' } }
        }
        return null
    }
}