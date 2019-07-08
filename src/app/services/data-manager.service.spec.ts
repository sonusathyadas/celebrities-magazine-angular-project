import { TestBed } from '@angular/core/testing';

import { DataManagerService } from './data-manager.service';
import { HttpClient } from '@angular/common/http';

describe('DataManagerService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers:[HttpClient]
    }));

    it('should be created', () => {
        const service: DataManagerService = TestBed.get(DataManagerService);
        expect(service).toBeTruthy();
    });
});
