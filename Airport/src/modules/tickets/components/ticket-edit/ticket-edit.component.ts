// import {Component, OnInit} from '@angular/core';
// import {Router, ActivatedRoute} from '@angular/router';
// import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
// import {TicketsService} from '../../services/tickets.service';
//
// @Component({
//     selector: 'app-ticket-edit',
//     templateUrl: './ticket-edit.component.html',
//     styleUrls: ['./ticket-edit.component.css']
// })
// export class TicketEditComponent implements OnInit {
//
//     flightForm: FormGroup;
//     number = '0';
//
//     constructor(private router: Router,
//                 private route: ActivatedRoute,
//                 private api: TicketsService,
//                 private formBuilder: FormBuilder) {
//     }
//
//     ngOnInit() {
//         this.getBook(this.route.snapshot.params['id']);
//         this.flightForm = this.formBuilder.group({
//             'number': [{value: '', disabled: true}, Validators.required],
//             'departureTime': [Validators.required],
//             'pointOfDeparture': [null, Validators.required],
//             'destinationArrivalTime': [Validators.required],
//             'destination': [null, Validators.required]
//         });
//     }
//
//     getBook(id) {
//         this.api.getTicket(id).subscribe(data => {
//             this.number = data.number;
//             this.flightForm.setValue({
//                 number: data.number,
//                 departureTime: data.departureTime,
//                 pointOfDeparture: data.pointOfDeparture,
//                 destinationArrivalTime: data.destinationArrivalTime,
//                 destination: data.destination
//             });
//         });
//     }
//
//     onFormSubmit() {
//         debugger;
//         const ticket = Object.assign({}, this.flightForm.value);
//         this.api.updateTicketForm(this.number, ticket)
//             .subscribe(() => {
//                     this.router.navigate(['/tickets/details', this.number]); //  -- go to details of just updated entity
//                 }, (err) => {
//                     console.log(err);
//                 }
//             );
//     }
//
//     flightDetails() {
//         this.router.navigate(['/tickets/details', this.number]); // -- go to details of entity
//     }
// }
