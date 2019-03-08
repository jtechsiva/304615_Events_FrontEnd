import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/shared/event.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  transMode = ["None", "Fixed", "Float"]
  createEvent: FormGroup;
  responseMessage: string;
  
  projectDet: any;
  eventCategory: any;
  selectedEventCat: any;
  selectedProject: string;
  
  constructor(private formBuilder: FormBuilder, 
    private eventService: EventService, 
    private router: Router) { }

  ngOnInit() {
    this.initialize();
    this.getProjects();
  }
  initialize(){
    this.createEvent = this.formBuilder.group({
      benName: ['', [Validators.required]],
      baseLocation: ['', [Validators.required]],
      council: ['', [Validators.required]],
      address: ['', [Validators.required]],
      pocID: ['', [Validators.required]],
      pocDet: ['', [Validators.required]],
      project: ['', [Validators.required]],
      eventCat: ['', [Validators.required]],
      eventTitle: ['', [Validators.required]],
      eventDesc: ['', [Validators.required]],
      numberOfVol: ['', [Validators.required]],
      transMod: ['', [Validators.required]],
      boardingPtDet: ['', [Validators.required]],
      droppingPtDet: ['', [Validators.required]],
      startDt: ['', [Validators.required]],
      endDt: ['', [Validators.required]],
      visibleDt: ['', [Validators.required]],
      isFavorite: false
    })
    }


    addEvent(){
      if (this.createEvent.valid) {        
        let data = this.createEvent.value;  
        this.eventService.addEvent(data).subscribe(
          res => {
            this.router.navigate(['userlist']);
          },
          err => {
            if(err.status === 422) {
            this.responseMessage = err.error.join('</br>');
            }
            else{
              this.responseMessage = "Something went wrong. Please condact admin.";
            }
          }
      )};
    }
getProjects(){
  this.eventService.getProjects().subscribe((projectData: Project[]) => {
    this.projectDet = projectData;
    console.log(JSON.stringify(this.projectDet));
    });
  }

  onSelect(projectID) {
    console.log('projectID: '+projectID);
    this.eventCategory = this.projectDet
                 .find(item => item._id == projectID).eventCat;
  }

  resetForm(){
   this.initialize();
  }

  bulkEventCreation(){
    this.router.navigate(['/createbulkevent']);
  }

}

