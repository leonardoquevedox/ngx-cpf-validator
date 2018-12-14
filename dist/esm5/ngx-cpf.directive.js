/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { CpfValidator } from './ngx-cpf.validator';
var NgxCpfValidator = /** @class */ (function () {
    function NgxCpfValidator() {
    }
    NgxCpfValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[ngx-cpf][ngModel]',
                    providers: [{
                            provide: NG_VALIDATORS,
                            useClass: CpfValidator,
                            multi: true
                        }]
                },] }
    ];
    return NgxCpfValidator;
}());
export { NgxCpfValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNwZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY3BmLXZhbGlkYXRvci8iLCJzb3VyY2VzIjpbIm5neC1jcGYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbkQ7SUFBQTtJQVMrQixDQUFDOztnQkFUL0IsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFNBQVMsRUFBRSxDQUFDOzRCQUNSLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixRQUFRLEVBQUUsWUFBWTs0QkFDdEIsS0FBSyxFQUFFLElBQUk7eUJBQ2QsQ0FBQztpQkFDTDs7SUFFOEIsc0JBQUM7Q0FBQSxBQVRoQyxJQVNnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IENwZlZhbGlkYXRvciB9IGZyb20gJy4vbmd4LWNwZi52YWxpZGF0b3InO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3gtY3BmXVtuZ01vZGVsXScsXG4gICAgcHJvdmlkZXJzOiBbe1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VDbGFzczogQ3BmVmFsaWRhdG9yLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH1dXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4Q3BmVmFsaWRhdG9yIHsgfSJdfQ==