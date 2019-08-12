import { Component, OnInit } from '@angular/core';
import {Mention} from 'src/app/api/services/interfaces';
import {MentionService} from 'src/app/api/services/mention.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  mentions: Mention[];

  constructor(private mentionService: MentionService, private router: Router) {}

  ngOnInit() {
    this.mentionService
    .getMention()
    .subscribe((data: Mention[]) => {
      this.mentions = data;
    });
  }
  goToAddMention () {
    this.router.navigateByUrl('/add-mention');
  }
}
