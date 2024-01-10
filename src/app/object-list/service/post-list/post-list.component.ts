import {Component, OnInit} from '@angular/core';
import {Post, PostService} from "../post.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts$?: Observable<Post[]>;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
    ) {
  }


  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }

  public redirectTo(id: number) {
    this.router.navigate([`${id}`], {relativeTo: this.route})
  }

}
