import { FormControl, Validator } from '@angular/forms';
export declare class CpfValidator implements Validator {
    validate(control: FormControl): {
        cpf: {
            error: string;
        };
    };
}
