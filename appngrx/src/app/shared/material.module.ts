
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const modules = [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
    declarations: [
    ],
    imports: [
        ...modules
    ],
    providers: [
    ],
    exports: [
        ...modules
    ]
})
export class MaterialModule { }
