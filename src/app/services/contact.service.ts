import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import emailjs from '@emailjs/browser';

export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private emailJsServiceId = 'service_sprw3uj';
  private emailJsTemplateId = 'template_ercothr';
  private emailJsPublicKey = 'yLWkeRYBZYzMNGoQJ';

  constructor(private firestore: AngularFirestore) {
    emailjs.init(this.emailJsPublicKey);
  }

  submitContactForm(formData: ContactFormData): Observable<void> {
    const firebaseSubmit = from(
      this.firestore.collection('contactForm').add({
        ...formData,
        timestamp: new Date()
      }).then(() => {})
    );

    const emailSubmit = from(
      emailjs.send(
        this.emailJsServiceId,
        this.emailJsTemplateId,
        {
          from_name: `${formData.firstname} ${formData.lastname}`,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Lana Mezvrishvili'
        }
      ).then(() => {})
    );

    return from(
      Promise.all([firebaseSubmit.toPromise(), emailSubmit.toPromise()]).then(() => {})
    );
  }
}
