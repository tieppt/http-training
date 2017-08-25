import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { optionalEmail } from '../validators/optional-email';
import { IContact } from '../models/contact';
import { ContactService } from '../contact.service';
import { ContactClientService } from '../contact-client.service';

@Component({
  selector: 'tp-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  cform: FormGroup;
  constructor(
    private fb: FormBuilder,
    private contactSrv: ContactClientService
    ) {}

  ngOnInit() {
    this.cform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      job: [],
      email: ['', optionalEmail]
    });
  }

  onSubmit() {
    if (this.cform.valid) {
      const { value } = this.cform;
      const contact: IContact = {
        name: value.name,
        job: value.job,
        email: value.email
      };
      this.contactSrv.createContact(contact)
        .subscribe(res => {
          console.log(res);
          this.cform.reset();
        });
    }
  }

}
