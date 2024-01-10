import {Component, OnInit} from '@angular/core';
import {Post, PostService} from "../post.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  public post$?: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.post$ = this.postService.getPostById(id);
      }
    });
  }


}
