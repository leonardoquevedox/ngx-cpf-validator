(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('gerador-validador-cpf')) :
    typeof define === 'function' && define.amd ? define('ngx-cpf-validator', ['exports', '@angular/common', '@angular/core', '@angular/forms', 'gerador-validador-cpf'], factory) :
    (factory((global['ngx-cpf-validator'] = {}),global.ng.common,global.ng.core,global.ng.forms,global.CPF));
}(this, (function (exports,common,core,forms,CPF) { 'use strict';

    CPF = CPF && CPF.hasOwnProperty('default') ? CPF['default'] : CPF;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CpfValidator = /** @class */ (function () {
        function CpfValidator() {
        }
        /**
         * @param {?} control
         * @return {?}
         */
        CpfValidator.prototype.validate = /**
         * @param {?} control
         * @return {?}
         */
            function (control) {
                /** @type {?} */
                var cpf = control.value;
                if (cpf && !CPF.validate(cpf)) {
                    return { cpf: { error: 'Whoops! This cpf number is not valid )' } };
                }
                return null;
            };
        return CpfValidator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxCpfValidator = /** @class */ (function () {
        function NgxCpfValidator() {
        }
        NgxCpfValidator.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngx-cpf][ngModel]',
                        providers: [{
                                provide: forms.NG_VALIDATORS,
                                useClass: CpfValidator,
                                multi: true
                            }]
                    },] }
        ];
        return NgxCpfValidator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var Directive = [NgxCpfValidator];
    var NgxCpfValidatorModule = /** @class */ (function () {
        function NgxCpfValidatorModule() {
        }
        NgxCpfValidatorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [Directive],
                        exports: [Directive]
                    },] }
        ];
        return NgxCpfValidatorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Directive = Directive;
    exports.NgxCpfValidatorModule = NgxCpfValidatorModule;
    exports.ɵa = NgxCpfValidator;
    exports.ɵb = CpfValidator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-cpf-validator.umd.js.map