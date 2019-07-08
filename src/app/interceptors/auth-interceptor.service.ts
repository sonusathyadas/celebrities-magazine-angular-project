import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //Handle request here
        let updatedReq= req.clone({
            //url: req.url.replace("http://", "https://"),
            setHeaders:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "custom-header":"Author:Sonu"
                //"Authorization": `Bearer ${token}`
            }
        })
        return next.handle(updatedReq);
    }
}
