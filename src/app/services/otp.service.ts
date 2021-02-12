import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class OtpService {
  value: any;
  constructor(private http: HttpClient) {}

  // sendOtp(value) {
  //   return this.http.post(
  //     'https://us-central1-taleemabad-grade-6.cloudfunctions.net/checkPhoneNumber',
  //     { phoneNumber: '+92' + value }
  //   );
  // }

  // verifyOtp() {
  //   this.http.post(
  //     'https://us-central1-taleemabad-grade-6.cloudfunctions.net/verifyAuthCode',
  //     { phoneNumber: '+92' }
  //   );
  // }

  // register(value) {
  //   return this.http.post(
  //     'https://us-central1-taleemabad-grade-6.cloudfunctions.net/addUser',
  //     { value }
  //   );
  // }
}
