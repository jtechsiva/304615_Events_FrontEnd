import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { UserprofileComponent } from 'src/app/userprofile/userprofile.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, 
              private router: Router) { }


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    userData: MatTableDataSource<User> ;
    userDetail: User;

    displayedColumns: string[] = ['firstName','lastName', 'displayName', 'email', 'action'];
  
    ngOnInit() {
      this.getUserList();
    }
  
    getUserList(){
      return this.userService.getUserList()
              .subscribe((userDet: User[]) => {               
                this.userData = new MatTableDataSource();
                this.userData.data = userDet;
                this.userData.paginator = this.paginator;
                this.userData.sort = this.sort;
      });
    }

    applyFilter(filterValue: string) {
    this.userData.filter = filterValue.trim().toLowerCase();
    }
    
    applyFilterByColumn(filterColumn: string, filterValue: string) {
      const tableFilters = [];
      tableFilters.push({filterColumn: filterColumn});
      //tableFilters.push({value: filterValue});
     
  
      console.log('filterColumn: ' + tableFilters);
  
      this.userData.filter = JSON.stringify(tableFilters);
      if (this.userData.paginator) {
        this.userData.paginator.firstPage();
      }
    }

    editUser(userId: string){
      console.log('User ID: ' + userId);

      this.router.navigate(['userprofile/' + userId]);   
    }
   
    deleteUser(userId: string){
      this.userService.deleteUserDet(userId).subscribe(
        res => { console.log( 'User ' + userId + " has been deleted successfully.");
        this.getUserList(); 
        },
        err => { console.log('Error in User delete: ' + userId);}               
      );
    }   
  }