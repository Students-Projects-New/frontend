**Table of Contents**

[TOCM]

[TOC]

### Instalaciones Adicionales
Para las modificaciones realizadas al frontend del proyecto "Students Projects" se deben instalar las sisguientes librerias:

- ng-zorro-antd.  Para instalarla abra una ventana de comandos, copie y pegue el siguiente comando `npm i ng-zorro-antd@12.1.1 --force`

- datatables.net.  Para instalarlo, en la ventana de comandos, copie y pegue el siguiente comando `npm i datatables.net@1.10.25 --force`

- @angular/animations.  Para instalarlo, en la ventana de comandos, copie y pegue el siguiente comando `npm i @angular/animations`

- ngx-toastr.  Para instalarlo, en la ventana de comandos, copie y pegue el siguiente comando `npm i ngx-toastr@15.2.1`. Luego siga las instrucciones del sitio oficial de ngx-toastr. `Link`: ***https://www.npmjs.com/package/ngx-toastr/v/15.2.1?activeTab=readme***.


### Despliegue

Una vez instalado todas las librerías anteriores siga los siguientes pasos:

1. Instale las dependencias con `npm install --legacy-peer-deps` o `npm install --force`.

2. Ejecute el comando `ng serve` y luego abra `Link` : http://localhost:4200/students-projects.

### Otros comandos utilizados

En las modificaciones se utilizaron otros comandos básicos de angular como por ejemplo:

- `ng g s <ruta o ubicación>`. Utilizado para crear un servicio.
- `ng g c <ruta o ubicación>`. Utilizado para crear un componente en el proyecto.

### Modificaciones Realizadas

Las principales modificaciones fueron:

- Control y manejo de errores en los servicios de authentication y databases.

Para esto se creó un servicio llamado "alerts" donde un método llamado "handleAlerts" en el cual se validan los tipos de alertas que se producen en el proyecto como lo son el "error", "success" y "warning".

####Método handleAlerts

```
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
```

- Lista de aplicaciones o proyectos para que el administrador las detenga.

Para esta modificación se manejó dentro del componente del dashboard la cual se llama "analytics.component.ts" Aquí se implementan los métodos "loadProjects", "toggleRunningState" y  "trackByFn".

#### Método loadProjects

Accede a  los proyectos del administrador o usuario. (Es el mismo método que está en list.component.ts).

``` 
private loadProjects(): void {
    const id = this.authService.getCurrentUserSubject().id;
    this.projectsService
      .getProjects(id)
      .subscribe((res: IProject[]) => {
        this.projects = res;
      });
  }

```

#### Método toggleRunningState

Utilizado para realizar el cambio del estado del proyecto ("true" o "false").

``` 
public toggleRunningState(app: any) {
    app.running = !app.running;
  }

```

#### Método trackByFn

Obtiene el ID de un proyecto.

``` 
public trackByFn(index: number, item: IProject): number {
    return item.id;
  }

```




###End
