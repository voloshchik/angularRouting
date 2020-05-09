import { Post, PostsService } from "./posts.service";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class PostResolver implements Resolve<Post> {
  constructor(private postService: PostsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> | Promise<Post> | Post {
    return of(this.postService.getById(+route.params["id"])).pipe(delay(1000));
  }
}
