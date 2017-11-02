var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
// import { InputMask } from "./src/input-mask.directive";
// import { LowercaseDirective } from "./src/lowercase.directive";
// import { UppercaseDirective } from "./src/uppercase.directive";
// export * from "./src/input-mask.directive";
// export * from "./src/uppercase.directive";
// export * from "./src/lowercase.directive";
var SiowebConfirm = SiowebConfirm_1 = (function () {
    function SiowebConfirm() {
    }
    SiowebConfirm.forRoot = function () {
        return {
            ngModule: SiowebConfirm_1
        };
    };
    return SiowebConfirm;
}());
SiowebConfirm = SiowebConfirm_1 = __decorate([
    NgModule({
        declarations: [
            InputMask, LowercaseDirective, UppercaseDirective
        ],
        exports: [
            InputMask, LowercaseDirective, UppercaseDirective
        ]
    })
], SiowebConfirm);
export { SiowebConfirm };
var SiowebConfirm_1;