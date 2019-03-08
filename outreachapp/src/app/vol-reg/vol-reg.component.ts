import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-vol-reg',
  templateUrl: './vol-reg.component.html',
  styleUrls: ['./vol-reg.component.css']
})
export class VolRegComponent implements OnInit {

  constructor(private eventService: EventService, 
    private router: Router) { }
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    eventData: MatTableDataSource<Event> ;
  
  
    displayedColumns: string[] = ['benName', 'project', 'duration', 'action'];
    
  
    ngOnInit() {
      this.getEventList();
    }
  
    getEventList(){
      return this.eventService.getEvents()
              .subscribe((eventDet: Event[]) => {               
                this.eventData = new MatTableDataSource();
                this.eventData.data = eventDet;
                this.eventData.paginator = this.paginator;
                this.eventData.sort = this.sort;
      });
    }
  
    applyFilter(filterValue: string) {
      this.eventData.filter = filterValue.trim().toLowerCase();
      }
  
    registerUser(eventID){      
      this.eventService.registerUser(eventID).subscribe(
        res => {
          this.router.navigate(['/message/M004']);
        },
        err => {
          console.log(err.error.join('</br>'));
          // if(err.status === 422) {
          //   this.responseMessage = err.error.join('</br>');
          // }
          // else{
          //   this.responseMessage = "Something went wrong. Please condact admin.";
          // }
        }
    )};
    
    UnregisterUser(eventID){

    }
    
}
