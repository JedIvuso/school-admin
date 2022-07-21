import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

interface DataItem {
  id: string;
  studentname: string;
  registrationNo: string;
  parentID: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isCollapsed = false;

  
  adminForm !: FormGroup;
  constructor(private formBuilder : FormBuilder)  {}

  i = 1;
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      id: `${this.i}`,
      studentname: `${this.i}. Thomas Tuchel`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    },
    {
      id: `${this.i}`,
      studentname: `${this.i}. Eduard Mendy`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    },
    {
      id: `${this.i}`,
      studentname: `${this.i}. Reece James`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Ben Chilwell`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Jules Kounde`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Thiago Silva`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Kalidou Koulibaly`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Mateo Kovacic`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Ng'olo Kante`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Raheem Sterling`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Kai Havertz`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Mason Mount`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Kepa Arrizabalaga`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Marcus Betinelli`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Cesar Azpilicueta`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Marcos Alonso`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Emerson Palmieri`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Ian Matseen`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Trevor Chalobah`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Levi Colwill`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Ethan Ampadu`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Jorginho Frello`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Ruben Loftus-Cheek`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Billy Gilmour`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Conor Gallagher`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Timo Werner`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Hakim Ziyech`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
    ,
    {
      id: `${this.i}`,
      studentname: `${this.i}. Christian Pulisic`,
      registrationNo: '17g01abt006',
      parentID: '35677620',
    }
  ];
  listOfDisplayData = [...this.listOfData];
  
  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.studentname.indexOf(this.searchValue) !== -1);
  }

  deleteRow(id: string): void {
    this.listOfDisplayData = this.listOfData.filter(d => d.id !== id);
  }

  
  ngOnInit(): void{
    this.adminForm = new FormGroup({
      'studentname' : new FormControl(),
      'registrationNo' : new FormControl(),
      'parentID' : new FormControl()
    });

    // this.adminForm = this.formBuilder.group({
    //   studentname : ['', Validators],
    //   registrationNo : ['', Validators],
    //   parentID : ['', Validators]
    // })
  }
  addStudent(){
    console.log(this.adminForm.value);
  }



}