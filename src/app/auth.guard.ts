import { AuthServece } from "./auth.service";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServece,
    private router:Router
    ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((isAuth) => {
      if (isAuth) {
        return true;
      }else{
this.router.navigate(['/'],{
    queryParams:{
        auth:false
    }
})
      }
    });
  }
}
