import { Directive } from '@angular/core'
import { NG_VALIDATORS } from '@angular/forms'
import { CpfValidator } from './ngx-cpf.validator';

@Directive({
    selector: '[ngx-cpf][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useClass: CpfValidator,
        multi: true
    }]
})

export class NgxCpfValidator { }