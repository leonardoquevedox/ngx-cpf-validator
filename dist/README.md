# Ngx-cpf-validator

> Ngx-cpf-validator is an ultra simple cpf validator for Angular.io.

[![basic-merchandising](https://imgur.com/LNOYczf.png)](https://github.com/leopq)

**Disclaimer**: I use this module for personal projects, which means it is designed to fulfill their specific use cases. The code I develop is crafted with reuse and generalization in mind, still, it may or may not fulfill for your requirements. In case it does not, please feel free to submit a pull request, create a fork or contact me at lpachecoquevedo@gmail.com so we can figure something out together. Thank you for reading this!

## Installing

```sh
$ npm install --save ngx-cpf-validator
```

## Quickstart

#### Import

Import **ngx-cpf-validator** module in Angular app.

```typescript
import { NgxCpfValidator } from 'ngx-cpf-validator'

(...)

@NgModule({
  (...)
  imports: [
    NgxCpfValidator.forRoot()
  ]
  (...)
})
```

#### Usage

In your template, you can declare the ngx-cpf-validator as the following:
```html
<form>
    <!-- Input with the CPF validator -->
    <input type="tel" ngx-cpf [(ngModel)]="user.cpf" name="userCpf" #cpfInput >
    <!-- Show an error message -->
    <div *ngIf="cpfInput && cpfInput.errors && cpfInput.errors.cpf">
        The CPF provided is not valid.
    </div>
    <!-- Disable the form in case of validation errors -->
    <button [disabled]="!form.valid">
        Submit!
    </button>
</form>

```

### And that's all there is about it.
* Any doubts? Fell free to open an issue.
* Improvements? Pull requests are always come!
* Suggestions? Of course: Let's [talk](https://twitter.com/leopq)!