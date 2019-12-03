import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title:"Cover Page",
      url: "/cover-page"
      
    },
    {
      title:"Chapter 1",
      url: "/chapter1"
    },
    {
      title:"Chapter 2",
      url: "/chapter2"
    },
    {
      title:"Chapter",
      url: "/chapter3"
    },
    {
      title:"Chapter 4",
      url: "/chapter4"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
