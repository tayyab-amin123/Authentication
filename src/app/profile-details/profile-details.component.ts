import { Component, OnInit } from '@angular/core';
import { OtpService } from '../services/otp.service';

import { ActivatedRoute } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  user: any = {
    name: '',
    grade: '',
    cellno: '',
    uid: '',
  };
  constructor(
    private otp: OtpService,
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.user.cellno = params['cellno'];
      this.user.uid = params['uid'];
    });
  }

  register() {
    this.afs.collection('users').doc(this.user.uid).set({
      name: this.user.name,
      grade: this.user.grade,
      cellno: this.user.cellno,
    });
  }
}
