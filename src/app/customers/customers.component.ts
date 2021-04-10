import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers = []
  @Input('isAdd') isAdd;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.httpClient.get('https://tonyhabib-express-crud-api.herokuapp.com/api/customers')
      .subscribe(
        response => {
          this.customers = response["data"];
        }
      )
  }
  deleteCustomer(id){
    this.customers = this.customers.filter( el => el._id != id);
    this.httpClient.delete('https://tonyhabib-express-crud-api.herokuapp.com/api/customer/' + id)
      .subscribe();
  }

}
