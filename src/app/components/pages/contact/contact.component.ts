import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService, ContactFormData } from '../../../services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  private markFieldsAsTouched(): void {
    Object.values(this.contactForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  onSubmit(formData: ContactFormData): void {
    if (this.contactForm.valid) {
      this.contactService.submitContactForm(formData).subscribe({
        next: () => {
          Swal.fire({
            title: 'Success!',
            text: 'Message sent successfully',
            icon: 'success',
            timer: 3000,
            showConfirmButton: false
          });
          this.contactForm.reset();
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again later.',
            timer: 3000,
            showConfirmButton: false
          });
        }
      });
    } else {
      this.markFieldsAsTouched();
    }
  }
}
