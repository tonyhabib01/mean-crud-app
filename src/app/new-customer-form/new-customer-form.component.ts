import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-customer-form',
  templateUrl: './new-customer-form.component.html',
  styleUrls: ['./new-customer-form.component.css']
})
export class NewCustomerFormComponent implements OnInit {
  customer = new Customer();
  id: string;
  addEdit: string;
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.router.url !== '/customer/new') {
      this.addEdit = 'Edit'
      this.id = this.route.snapshot.params['id']
      this.httpClient.get('https://tonyhabib-express-crud-api.herokuapp.com/api/customer/' + this.id).subscribe(
        response => {
          if (response['success']) {
            this.customer.name = response['data'].name;
            this.customer.phone = response['data'].phone;
          } else {
            console.log(response['errors']);
          }
        }
      )
    }
    else {
      this.addEdit = 'Create';
    }
  }

  onSubmit() {
    if (this.router.url == '/customer/new') {

      const url = 'https://tonyhabib-express-crud-api.herokuapp.com/api/customer'
      this.httpClient.post(url, this.customer)
        .subscribe(
          () => {
            this.router.navigateByUrl('/')
          }
        )
    } else {
      const url = 'https://tonyhabib-express-crud-api.herokuapp.com/api/customer/' + this.id;
      this.httpClient.put(url, this.customer)
        .subscribe(
          () => {
            this.router.navigateByUrl('/')
          }
        )
    }

  }

}

class Customer {
  name: string;
  phone: string;
}
