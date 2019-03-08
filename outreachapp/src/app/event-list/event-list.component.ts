import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { EventService } from '../shared/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService, 
    private router: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  eventData: MatTableDataSource<Event> ;


  displayedColumns: string[] = ['benName','council', 'project', 'eventCat','numberOfVol', 'action'];
  

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

    onChecked(val){
     if(val)
      this.applyFilter('true');
      else
        this.getEventList();
    }

    editEvent(eventId: string){
      console.log('Event ID: ' + eventId);

      this.router.navigate(['editevent/' + eventId]);   
    }
   
    deleteEvent(eventId: string){
      this.eventService.deleteEventDet(eventId).subscribe(
        res => { console.log( 'Event ' + eventId + " has been deleted successfully.");
        this.router.navigate(['eventlist']);
      },
        err => { console.log('Error in User delete: ' + eventId);}               
      );
    }  
}
