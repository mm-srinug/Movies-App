import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss'
})
export class FeedbackFormComponent {
  feedbackForm: FormGroup;
  showPopup: boolean = false;
  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      this.showPopup = true;
      console.log('Feedback submitted:', this.feedbackForm.value);
      this.feedbackForm.reset();
      setTimeout(() => {
        this.showPopup = false;
      }, 4000);
    } else {
      alert('Please complete the form correctly.');
    }
  }
}