import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor( private toastr: ToastrService) { }

  handleAlerts(message: string, typeAlert: string) {
    if (typeAlert.toLowerCase() === 'error') {
      this.toastr.error(message, '', undefined);
      return throwError(new Error(message));
    } else if (typeAlert.toLowerCase() === 'success') {
      this.toastr.success(message, '', undefined);
      return (message);
    } else {
      this.toastr.warning(message, '', undefined);
      return (message);
    }
  }
}
