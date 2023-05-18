import { Component, OnInit } from '@angular/core';
import { ChampionsService } from 'src/app/service/champions.service';
import { Champion } from 'src/app/types/champions';

@Component({
  selector: 'app-champions-page',
  templateUrl: './champions-page.component.html',
  styleUrls: ['./champions-page.component.css'],
})
export class ChampionsPageComponent implements OnInit {
  champions: Champion[] = [];
  isLoading: boolean = false;
  isError: boolean = false;
  constructor(private championsService: ChampionsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchChampions();
  }

  fetchChampions() {
    this.championsService.getChampions().subscribe(
      (response) => {
        this.champions = Object.values(response.data);
        this.isLoading = false;
      },
      (error) => {
        if (error) {
          this.isLoading = false;
          this.isError = true;
        }
      }
    );
  }
}
