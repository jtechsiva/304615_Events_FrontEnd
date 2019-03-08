import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/shared/event.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  eventId: string;
  eventData: any;
  editEventForm: FormGroup;
  projectDet: any;
  eventCategory: any;
  selectedProject: string;

  constructor(private formBuilder: FormBuilder,
    private eventService: EventService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(params => {
        this.eventId = params.id                
      });      
     }

  ngOnInit() {
    this.initialize();
    this.getProjects();
    this.LoadEventDataToForm();  
   }

  initialize(){
    this.editEventForm = this.formBuilder.group({
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
  LoadEventDataToForm(){
    this.eventService.getEvent(this.eventId).subscribe(
      res => {
        this.eventData = res; 
        console.log(JSON.stringify(res))   ;          
        this.editEventForm.patchValue({
          benName: this.eventData.benName,
          baseLocation: this.eventData.baseLocation,
          council: this.eventData.council,
          address: this.eventData.address,
          pocID: this.eventData.pocID,
          pocDet: this.eventData.pocDet,
          project: this.eventData.project,
          eventCat: this.eventData.eventCat,
          eventTitle: this.eventData.eventTitle,
          eventDesc: this.eventData.eventDesc,
          numberOfVol: this.eventData.numberOfVol,
          transMod: this.eventData.transMod,
          boardingPtDet: this.eventData.boardingPtDet,
          droppingPtDet: this.eventData.droppingPtDet,
          startDt: this.eventData.startDt,
          endDt: this.eventData.endDt,
          visibleDt: this.eventData.visibleDt,
          isFavorite: this.eventData.isFavorite
        });        
      },
      err => {}
    );
  }

  onSelect(projectID) {
    console.log('projectID: '+projectID);
    this.eventCategory = this.projectDet
                 .find(item => item._id == projectID).eventCat;
  }

  resetForm(){
   this.initialize();
  }

  getProjects(){
    this.eventService.getProjects().subscribe((projectData: Project[]) => {
      this.projectDet = projectData;
      console.log(JSON.stringify(this.projectDet));
      });
    }

    updateEvent(){
    let formData = this.editEventForm.value;
    console.log(JSON.stringify(formData));    
    this.eventService.updateEventDet(this.eventId, formData).subscribe(
      res => {
        console.log('Event Detail has been successfully updated !!!');
        this.router.navigate(['/message/M003']);
      },
      err => { console.log('Error in updating the event: ' + JSON.stringify(err, undefined, 2) );
      }      
    );
  }

}
