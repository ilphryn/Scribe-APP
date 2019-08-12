import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {faEdit,faTrashAlt,faPlusSquare} from '@fortawesome/free-regular-svg-icons';

import {Mention} from 'src/app/api/services/interfaces';
import {MentionService} from 'src/app/api/services/mention.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {
  // icons
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;

  //data
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