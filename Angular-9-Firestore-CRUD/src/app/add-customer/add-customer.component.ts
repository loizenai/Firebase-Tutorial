import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html'
})
export class AddCustomerComponent implements OnInit {
  customer: Customer;
  /**
   * Constructing Http Customer Service
   * @param customerService 
   */
  constructor(private customerService: CustomerService,
                private messageService: MessageService) { }

  ngOnInit(): void {
    this.customer = new Customer();
  }

  /**
   * Store a Customer to backend server
   */
  save() {
    try{

      this.customerService.createCustomer(this.customer);
      let msg = "Success -> Post a Customer: " 
                    + "<ul>"
                        + "<li>firstname: " + this.customer.firstname + "</li>"
                        + "<li>lastname: " + this.customer.lastname + "</li>"
                        + "<li>age: " + this.customer.age + "</li>"
                        + "<li>address: " + this.customer.address + "</li>"
                    + "</ul>";

      this.messageService.add(msg);
    } catch(err){
      console.error(err);
      let msg = "Error! -> Action Posting a Customer:" 
                  + "<ul>"
                    + "<li>firstname = " + this.customer.firstname + "</li>"
                    + "<li>lastname = " + this.customer.lastname + "</li>"
                    + "<li>age = " + this.customer.age + "</li>"
                    + "<li>address = " + this.customer.address + "</li>"
                  + "</ul>";

      this.messageService.add(msg);
    }
  }

  reset(){
    this.customer = new Customer();
  }

  /**
   * Function handles form submitting
   */
  onSubmit() {
    this.save();
    this.reset();
  }
}