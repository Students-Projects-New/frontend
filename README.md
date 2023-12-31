## Frontend Students Project


### Additional Installations
For the modifications made to the frontend of the "Students Projects" project, the following libraries need to be installed:

- ng-zorro-antd. To install it, open a command prompt, copy and paste the following command: `npm i ng-zorro-antd@12.1.1 --force`

- datatables.net. To install it, in the command prompt, copy and paste the following command: `npm i datatables.net@1.10.25 --force`

- @angular/animations. To install it, in the command prompt, copy and paste the following command: `npm i @angular/animations`

- ngx-toastr. To install it, in the command prompt, copy and paste the following command: `npm i ngx-toastr@15.2.1`. Then follow the instructions on the official ngx-toastr website. `Link`: ***https://www.npmjs.com/package/ngx-toastr/v/15.2.1?activeTab=readme***.

### Deployment

Once all the above libraries are installed, follow these steps:

1. Install the dependencies with `npm install --legacy-peer-deps` or `npm install --force`.

2. Run the command `ng serve` and then open `Link`: http://localhost:4200/students-projects.

### Other Used Commands

Other basic Angular commands were used in the modifications, such as:

- `ng g s <path or location>`. Used to create a service.
- `ng g c <path or location>`. Used to create a component in the project.

### Modifications Made

The main modifications were:

- Error control and handling in the authentication and databases services.

For this, a service called "alerts" was created, with a method called "handleAlerts" where the types of alerts that occur in the project, such as "error," "success," and "warning," are validated.

#### Method handleAlerts

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

- List of applications or projects for the administrator to stop.

![](https://raw.githubusercontent.com/FelipeM09/imagesProject/main/Imagen%20de%20WhatsApp%202023-06-22%20a%20las%2000.47.09.jpg)

For this modification, it was handled within the dashboard component called "analytics.component.ts". Here, the methods "loadProjects," "toggleRunningState," and "trackByFn" are implemented.

#### Method loadProjects

Access the projects of the administrator or user. (It is the same method as in list.component.ts).

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

#### Method toggleRunningState

Used to change the state of the project ("true" or "false").

``` 
public toggleRunningState(app: any) {
    app.running = !app.running;
  }

```

#### Method trackByFn

Get the ID of a project.

``` 
public trackByFn(index: number, item: IProject): number {
    return item.id;
  }

```
- Dashboard with figures in real time.

![](https://raw.githubusercontent.com/FelipeM09/imagesProject/main/Imagen%20de%20WhatsApp%202023-06-22%20a%20las%2000.47.16.jpg)

For this modification the following methods were used:

#### Method getDatabases

Get the ID of a databases.

``` 
private getDatabases(): void {
    this.dataBasesService
      .getDatabases(this.currentUser.id)
      .subscribe((databases: IDatabase[]) => {
        this.rows = databases;
      });
  }

```

#### Method getCourses

Get the ID of a Courses.

``` 
private getCourses(): void {
    const id = this.authService.getCurrentUserSubject().id;
    this.coursesService
      .getCourses(id)
      .subscribe((courses: ICourse[]) => {
        this.courses = courses;
      });
  }

```

#### Method getUsers

Get the ID of a Users.

``` 
private getUsers(): void {
    this.usersService
      .getUsersById(this.currentUser.id)
      .subscribe((users: IUserDto[]) => {
        this.rowsUser = users;
      });
  }

```
This is the final result of the dashboard and the list of projects:

![](https://raw.githubusercontent.com/FelipeM09/imagesProject/main/Imagen%20de%20WhatsApp%202023-06-22%20a%20las%2000.46.36.jpg)

- Session Time

The time in milliseconds of the "autoSignIn" method of the "Auth" service has been modified.

``` 
private autoSignIn(token: IToken) {
    this.token = this.jwtHelper.decodeToken(token.access);
    this.cookieService.set('access_token', token.access, new Date(this.token.exp * 1800000), '/');
    this.cookieService.set('refresh_token', token.refresh, new Date(this.token.exp * 1000), '/');
    localStorage.setItem('currentUser', JSON.stringify(this.token.user));
    this.currentUserSubject.next(this.token.user);
    this.detectUserActivity();
    this.autoRefreshToken((new Date(this.token.exp * 1000).getTime()) - (new Date().getTime()));
  }
  
```


### End
