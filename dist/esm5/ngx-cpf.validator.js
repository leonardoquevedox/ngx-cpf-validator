/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import CPF from 'gerador-validador-cpf';
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
export { CpfValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNwZi52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY3BmLXZhbGlkYXRvci8iLCJzb3VyY2VzIjpbIm5neC1jcGYudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQTtBQUV2QztJQUFBO0lBUUEsQ0FBQzs7Ozs7SUFQRywrQkFBUTs7OztJQUFSLFVBQVMsT0FBb0I7O1lBQ3JCLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSztRQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSx3Q0FBd0MsRUFBRSxFQUFFLENBQUE7U0FDdEU7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFSRCxJQVFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgQ1BGIGZyb20gJ2dlcmFkb3ItdmFsaWRhZG9yLWNwZidcblxuZXhwb3J0IGNsYXNzIENwZlZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgdmFsaWRhdGUoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcbiAgICAgICAgbGV0IGNwZiA9IGNvbnRyb2wudmFsdWVcbiAgICAgICAgaWYgKGNwZiAmJiAhQ1BGLnZhbGlkYXRlKGNwZikpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGNwZjogeyBlcnJvcjogJ1dob29wcyEgVGhpcyBjcGYgbnVtYmVyIGlzIG5vdCB2YWxpZCApJyB9IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn0iXX0=