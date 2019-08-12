import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable()
export class MentionService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3333';
  getMention() {
    return this
      .http
      .get(`${this.url}/mention`);
  }

  createMention(data) {
    this.http.post(`${this.url}/mention`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Enregistrement ok', 'Success');
          this.router.navigateByUrl('/mention');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
}
