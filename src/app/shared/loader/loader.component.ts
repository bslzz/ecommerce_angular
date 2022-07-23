import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/services/common/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  public loader$!: Observable<boolean>;
  constructor(private loaderService: LoaderService) {
    this.loader$ = this.loaderService.loader$;
  }

  ngOnInit(): void {}
}
