import { Component } from '@angular/core';
import { NgxTimelineEvent, NgxTimelineEventGroup, NgxTimelineEventChangeSideInGroup, NgxDateFormat } from 'ngx-timeline';
import { BehaviorSubject } from 'rxjs';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';
  events: NgxTimelineEvent[];
  events$: BehaviorSubject<NgxTimelineEvent[]> = new BehaviorSubject(null);
  color = 0;
  backgroundColor = 'red';
  form: UntypedFormGroup;
  ngxDateFormat = NgxDateFormat;

  configurations = [
    {
      label: 'Language code',
      formControlName: 'langCode',
      options: [
        {name: 'English', value: 'en'},
        {name: 'French', value: 'fr'},
        {name: 'German', value: 'de'},
        {name: 'Spanish', value: 'es'},
        {name: 'Italian', value: 'it'},
        {name: 'Slovenian', value: 'sl'},
        {name: 'Turkish', value: 'tr'},
        {name: 'Portuguese', value: 'pt'}
      ]
    },
    {
      label: 'Enable animation',
      formControlName: 'enableAnimation',
      options: [
        {name: 'Enable animation', value: true},
        {name: 'Disable animation', value: false}
      ]
    },
    {
      label: 'Reverse Order',
      formControlName: 'reverseOrder',
      options: [
        {name: 'Normal Time Order (older first)', value: false},
        {name: 'Reverse Time Order (newer first)', value: true}
      ]
    },
    {
      label: 'Custom class',
      formControlName: 'customClass',
      options: [
        {name: 'No Custom Class', value: false},
        {name: 'Custom Class', value: true}
      ]
    },
    {
      label: 'Group events by',
      formControlName: 'groupEvent',
      options: [
        {name: 'Month Year', value: NgxTimelineEventGroup.MONTH_YEAR},
        {name: 'Day Month Year', value: NgxTimelineEventGroup.DAY_MONTH_YEAR},
        {name: 'Year', value: NgxTimelineEventGroup.YEAR}
      ]
    },
    {
      label: 'Change event side in group',
      formControlName: 'changeSideInGroup',
      options: [
        {name: 'On different day', value: NgxTimelineEventChangeSideInGroup.ON_DIFFERENT_DAY},
        {name: 'All', value: NgxTimelineEventChangeSideInGroup.ALL},
        {name: 'On different hours, minutes and seconds', value: NgxTimelineEventChangeSideInGroup.ON_DIFFERENT_HMS},
        {name: 'On different month', value: NgxTimelineEventChangeSideInGroup.ON_DIFFERENT_MONTH}
      ]
    },
    {
      label: 'Date instant custom template',
      formControlName: 'dateInstantCustomTemplate',
      options: [
        {name: 'No Custom template', value: false},
        {name: 'Custom Date Instant Template', value: true}
      ]
    },
    {
      label: 'Event custom template',
      formControlName: 'eventCustomTemplate',
      options: [
        {name: 'No Custom template', value: false},
        {name: 'Custom Event Template', value: true}
      ]
    },
    {
      label: 'Inner event custom template',
      formControlName: 'innerEventCustomTemplate',
      options: [
        {name: 'No Custom template', value: false},
        {name: 'Custom Inner Event Template', value: true}
      ]
    },
    {
      label: 'Center icon custom template',
      formControlName: 'centerIconCustomTemplate',
      options: [
        {name: 'No Custom Template', value: false},
        {name: 'Custom Icon Template', value: true}
      ]
    },
    {
      label: 'Period custom template',
      formControlName: 'periodCustomTemplate',
      options: [
        {name: 'No Custom Template', value: false},
        {name: 'Custom Period Template', value: true}
      ]
    },
    {
      label: 'Click emitter',
      formControlName: 'clickEmitter',
      options: [
        {name: 'No emitter', value: false},
        {name: 'Handle click (open console)', value: true}
      ]
    }
  ];
  constructor() {
    this.form = new UntypedFormGroup({});
    this.configurations.forEach(configuration =>
      this.form.addControl(configuration.formControlName, new UntypedFormControl(configuration.options[0].value)));
    this.initEvents();
  }

  private initEvents(): void {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const nextMonth = new Date();
    nextMonth.setMonth(today.getMonth() + 1);
    const nextYear = new Date();
    nextYear.setFullYear(today.getFullYear() + 1);

    this.events = [
      { id: 5, description: 'This is the description of the event 5', timestamp: nextYear, title: 'title 5' },
      { id: 0, description: 'This is the description of the event 0', timestamp: today, title: 'title 0' },
      { id: 1, description: 'This is the description of the event 1', timestamp: tomorrow, title: 'title 1' },
      { id: 2, description: 'This is the description of the event 2', timestamp: today, title: 'title 2' },
      { id: 3, description: 'This is the description of the event 3', timestamp: tomorrow, title: 'title 3' },
      { id: 4, description: 'This is the description of the event 4', timestamp: nextMonth, title: 'title 4' },
    ];
  }

  handleClick(event: any): void {
    if (event) {
      window.console.log('', event);
    }
  }
}
