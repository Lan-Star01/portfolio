import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/compat/storage"
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm!: FormGroup;
  showModal: boolean = false;
  
  constructor(private fb: FormBuilder, private fireStorage: AngularFireStorage, private firestore: AngularFirestore,) {
      this.myForm();
   }
  ngOnInit() {

  }

  myForm() {


    this.contactForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required ]
    })
  }

  markFieldsAsTouched() {
    Object.values(this.contactForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  onSubmit(value:any) {
    if (this.contactForm.valid) {
      console.log(value)

      const formValues = this.contactForm.value;

      this.firestore.collection('contactForm').add(formValues)
        .then(() => {
          Swal.fire({
            title: 'Wohoo!',
            text: 'Message sent successfully',
            icon: 'success',
            timer: 3000,
            showConfirmButton: false
          });
        })
        .catch(error => {
          console.error('Error saving form values to Firestore:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            timer: 3000,
            showConfirmButton: false
          });
        });
      this.contactForm.reset();

    } else {
      this.markFieldsAsTouched();
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
