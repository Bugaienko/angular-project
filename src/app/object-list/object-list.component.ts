import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent {

  constructor(private router: Router, private  route: ActivatedRoute) {

  }

  protected readonly myObjects = myObjects;

  public redirectTo(id: number) {
      this.router.navigate([`${id}`], {relativeTo: this.route})
  }
}




export const myObjects: MyObject[] = [
  {
    title: "First",
    content: "nulla aenean feugait fabellas scripta vim solet solet qualisque sadipscing",
    id: 1
  },
  {
    title: "Second",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    id: 2
  },
  {
    title: "Last",
    content: "fugit mauris affert magna laoreet massa enim usu inceptos tractatos",
    id: 3
  },
  {
    title: "gravida",
    content: "massa equidem hinc laoreet metus periculis invenire perpetua curabitur per",
    id: 4
  },
  {
    title: "dolores",
    content: "utamur mi phasellus senserit his conclusionemque luctus quis viris molestie",
    id: 5
  },

]

export interface MyObject {
  title: string,
  content: string,
  id: number
}
