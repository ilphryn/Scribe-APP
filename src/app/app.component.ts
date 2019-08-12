import { Component } from '@angular/core';
import { 
  faUserCircle,
  faHeadset, 
  faEnvelope, 
  faExclamationTriangle, 
  faCog,
  faStream,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Scribe';

  // icons
  faUserCircle = faUserCircle;
  faHeadset = faHeadset;
  faEnvelope = faEnvelope;
  faExclamationTriangle = faExclamationTriangle;
  faCog = faCog;
  faStream = faStream;
  faChartBar = faChartBar;


  // Data sidebar
  menu1='Signalisation Mail';
  menu1icon=faEnvelope;
    item11='Nouvelle Signalisation';
    link11='/add-signalisation';

    item12='Liste des Signalisations';
    link12='/list-signalisation';

  menu2='Hotline Intervenant';
  menu2icon=faHeadset;
    item21='Nouvelle Assistance'
    link21="#";

    item22='Liste des Assistances'
    link22="#";

  menu3='Incident Réseau';
  menu3icon=faExclamationTriangle;

    item31='Nouvel Incident';
    link31="#";

    item32='Liste des Incident';
    link32="#";

  setting='Paramètres';
}
 