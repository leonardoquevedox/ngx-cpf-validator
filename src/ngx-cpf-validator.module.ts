/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxCpfValidator } from './ngx-cpf-validator'

@NgModule({
    imports: [CommonModule],
    declarations: [NgxCpfValidator],
    exports: [NgxCpfValidator]
})
export class NgxCpfValidatorModule { }