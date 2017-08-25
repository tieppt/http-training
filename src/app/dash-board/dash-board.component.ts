import { Component, OnDestroy, OnInit } from '@angular/core';
import { IContact } from '../models/contact';
import { Subscription } from 'rxjs/Subscription';

import { ContactService } from '../contact.service';
import { ContactClientService } from '../contact-client.service';

@Component({
  selector: 'tp-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit, OnDestroy {

  contactList: IContact[];
  subs: Subscription;
  constructor(private contactSrv: ContactClientService) {}

  ngOnInit() {
    this.subs = this.contactSrv.getListContacts()
      .subscribe(res => this.contactList = res);
  }

  removeContact(contact: IContact) {
    if (contact && contact._id) {
      // TODO: Task - keep subscription to clean up
      this.contactSrv.deleteContact(contact._id)
        .switchMap(_ => this.contactSrv.getListContacts())
        .subscribe(res => this.contactList = res);
    }
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
