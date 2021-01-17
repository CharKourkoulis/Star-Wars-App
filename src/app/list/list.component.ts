import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private swService: StarWarsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.characters = this.swService.getCharacters(params.side)
    );
  }
}
