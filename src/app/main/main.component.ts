import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from '../interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
  ) {

  }
  cities: SelectItem[] = [];

  marqueeText: string = '為喵星人，護台灣從喵的眼中，看見台灣喵的未來，人的希望';
  ngOnInit(): void {
    this.cities = this.insertData.map(item => ({ label: item.MsgOptionMemo, value: item.MsgOptionMemo }));
    console.log(this.cities);

  }


  insertData =
    [
      {
        "MsgOption": "1",
        "MsgOptionMemo": "國小",
        "MsgOptionSerno": "6"
      },
      {
        "MsgOption": "2",
        "MsgOptionMemo": "國中",
        "MsgOptionSerno": "5"
      },
      {
        "MsgOption": "3",
        "MsgOptionMemo": "高中(職)",
        "MsgOptionSerno": "4"
      },
      {
        "MsgOption": "4",
        "MsgOptionMemo": "大學",
        "MsgOptionSerno": "3"
      },
      {
        "MsgOption": "5",
        "MsgOptionMemo": "碩士",
        "MsgOptionSerno": "2"
      },
      {
        "MsgOption": "6",
        "MsgOptionMemo": "博士",
        "MsgOptionSerno": "1"
      }
    ];




  marqueeText1: string | undefined;
  tasks = [
    { taskSn: '005', name: '代辦' },
    { taskSn: '002', name: '代辦' },
    { taskSn: '003', name: '代辦' },
    { taskSn: '004', name: '代辦' }

  ];



  redirectTo() {
    this.router.navigate(['/money']);
  }


}
