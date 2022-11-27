import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  project!: { id: number, context: string };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.project = {
      id: this.route.snapshot.params['id'],
      context: this.route.snapshot.params['context']
    };
  }

  public onBack(): void {
    this.router.navigate(['/projects']);
  }

}
