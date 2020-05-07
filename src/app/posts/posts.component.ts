import { Component, OnInit } from "@angular/core";
import { PostsService } from "../posts.service";
import { Router } from "@angular/router";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  showIds = false;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.showIds = !!params.showIds;
      console.log("params", params);
    });
    this.route.fragment.subscribe((fragment)=>{
      console.log('fragment', fragment)
    })
  }
  showIdsPrograms() {
    this.router.navigate(["posts"], {
      queryParams: {
        showIds: true,
      },
      fragment:'jjjjjj'
    });
  }
}
