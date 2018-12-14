/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxCpfValidator } from './ngx-cpf.directive'

export const Directive = [NgxCpfValidator];

@NgModule({
    imports: [CommonModule],
    declarations: [Directive],
    exports: [Directive]
})
export class NgxCpfValidatorModule { }