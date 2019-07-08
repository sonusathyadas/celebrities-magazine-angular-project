import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonComponent } from './add-person.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

describe('AddPersonComponent', () => {
    let component: AddPersonComponent;
    let fixture: ComponentFixture<AddPersonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [AddPersonComponent],
            providers:[HttpClient]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddPersonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
