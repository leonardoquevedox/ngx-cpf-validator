/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import CPF from 'gerador-validador-cpf';
export class CpfValidator {
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        /** @type {?} */
        let cpf = control.value;
        if (cpf && !CPF.validate(cpf)) {
            return { cpf: { error: 'Whoops! This cpf number is not valid )' } };
        }
        return null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNwZi52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY3BmLXZhbGlkYXRvci8iLCJzb3VyY2VzIjpbIm5neC1jcGYudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQTtBQUV2QyxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFDckIsUUFBUSxDQUFDLE9BQW9COztZQUNyQixHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUs7UUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsd0NBQXdDLEVBQUUsRUFBRSxDQUFBO1NBQ3RFO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3IgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCBDUEYgZnJvbSAnZ2VyYWRvci12YWxpZGFkb3ItY3BmJ1xuXG5leHBvcnQgY2xhc3MgQ3BmVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICB2YWxpZGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCkge1xuICAgICAgICBsZXQgY3BmID0gY29udHJvbC52YWx1ZVxuICAgICAgICBpZiAoY3BmICYmICFDUEYudmFsaWRhdGUoY3BmKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgY3BmOiB7IGVycm9yOiAnV2hvb3BzISBUaGlzIGNwZiBudW1iZXIgaXMgbm90IHZhbGlkICknIH0gfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufSJdfQ==