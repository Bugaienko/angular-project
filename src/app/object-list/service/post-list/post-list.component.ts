import {Component, OnInit} from '@angular/core';
import {Post, PostService} from "../post.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts$?: Observable<Post[]>;

  constructor(private postService: PostService) {
  }


  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }


}
