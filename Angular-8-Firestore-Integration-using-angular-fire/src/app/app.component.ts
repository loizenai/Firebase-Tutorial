import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8Firebase';
  description = 'Angular-Fire-Demo';
 
  itemValue = '';
  items: Observable<any[]>;

  private dbPath = '/items';
  customersRef: AngularFirestoreCollection<any> = null;
 
  constructor(public firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }
 
  onSubmit() {
    this.firestore.collection('items').add({content: this.itemValue});
    this.itemValue = '';
  }
}