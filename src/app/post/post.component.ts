import { PostsService, Post } from "../posts.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log("params", params);
      this.post = this.postService.getById(+params.id);
    });
  }
  loadPost() {
    this.router.navigate(['/posts',44])
  }
}
