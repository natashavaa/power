import { ConsultaInterface } from 'src/app/models/consulta.interface';
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import { Subject } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from '../../app.component';
import { UserInterface } from '../../models/user.interface';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-consultadiaria',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './consultadiaria.component.html',
  styleUrls: ['./consultadiaria.component.css']
})

export class ConsultadiariaComponent {

  constructor(private router: Router,
              private dataApi: DataApiService,
              private auth: AuthService,
              private app: AppComponent) {

}

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;


  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;
public user: UserInterface = {
  id: '',
  name: '',
  dni: '',
  age: 0,
  sex: '',
  mail: '',
  password: '',
  userType: '',
  username: '',
  phone: ''


};
 private consulta: ConsultaInterface = {};
 private doctorUser: UserInterface = {};
 private doctorP: UserInterface = {
  name: '',
};

   usuarioA: string;
   especialidad: string;
   cambiarColor: boolean;
  momentoC: string;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }
ngOnInit(): void {
  this.getlistUsers();
  this.doctor();
  this.getlistConsultas();
  this.app.mostrar = true;
}
  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };

  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  getConsultaByDoctor(): void {
    if (Object.is(this.doctorP.name, 'Todos')) {
      this.getlistConsultas();
  } else {
  this.getlistConsultasByDoctor();
  }

  }
  global(): void {
    this.router.navigate(['global']);
  }
  getlistConsultas() {
    this.dataApi.getAllconsultas().subscribe((cosultas: ConsultaInterface) => ( this.consulta = cosultas));

  }
  getlistConsultasByDoctor() {
    this.dataApi.getAllconsultasByDoctor(this.doctorP.name).subscribe((cosultas: ConsultaInterface) => ( this.consulta = cosultas));

  }
  getlistUsers() {
    // tslint:disable-next-line: max-line-length
    this.dataApi.getAllUserConPermiso().subscribe((doctorUser: UserInterface) => { this.doctorUser = doctorUser; } );
  }
  getlistConsultasHoy() {
    this.dataApi.getAllconsultasHoy().subscribe((cosultas: ConsultaInterface) => ( this.consulta = cosultas));
  }
  getlistConsultasMes() {
    this.dataApi.getAllconsultasMes().subscribe((cosultas: ConsultaInterface) => ( this.consulta = cosultas));
  }
  getConsultas(): void {
    if ( Object.is(this.momentoC, 'Todas')) {
      this.getlistConsultas();
    } else if ( Object.is(this.momentoC, 'Mes')) {
      this.getlistConsultasMes();
    } else if (Object.is(this.momentoC, 'Hoy')) {
      this.getlistConsultasHoy();
    } else {
      this.getlistConsultas();
    }
  }

  doctor(): string {
    this.user = this.auth.getCurrentUser();
    if (Object.is(this.user.username, 'admin')) {
        this.usuarioA = 'Administrador';

        return this.usuarioA;
    } else {
      this.usuarioA = 'Doctor : ' + this.user.name;
      this.especialidad = 'Especialidad : ' +  this.user.userType;

      return  this.usuarioA;

    }
  }
  cambiarstatus(consulta: ConsultaInterface): void {
    if (Object.is(consulta.status, 'PROGRAMADA')) {
      consulta.status = 'REALIZADA';
      this.auth.UpdateConsulta(
        consulta.id,
        consulta.idDoctor,
        consulta.idSpeciality ,
        consulta.idClinicHistory ,
        consulta.idPatient ,
        consulta.namePatient ,
        consulta.dniPatient,
        consulta.fechaPlanificada,
        consulta.hora ,
        consulta.motive,
        consulta.status,
        consulta.consultorioVisitar,
      ).subscribe(consulta2 => {
        this.ngOnInit();
      } );
    }

  }
  suspenderstatus(consulta: ConsultaInterface): void {
    this.cambiarColor = false;
    consulta.status = 'SUSPENDIDA';
    this.auth.UpdateConsulta(
      consulta.id,
      consulta.idDoctor,
      consulta.idSpeciality ,
      consulta.idClinicHistory ,
      consulta.idPatient ,
      consulta.namePatient ,
      consulta.dniPatient,
      consulta.fechaPlanificada,
      consulta.hora ,
      consulta.motive,
      consulta.status,
      consulta.consultorioVisitar,
    ).subscribe(consulta2 => {
      this.ngOnInit();
      this.cambiarColor = true;

    } );
  }
}
