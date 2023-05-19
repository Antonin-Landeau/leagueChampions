import { Component, OnInit } from '@angular/core';
import { ChampionsService } from 'src/app/service/champions.service';
import { Champion } from 'src/app/types/champions';
import { Filter } from 'src/app/types/filter';

@Component({
  selector: 'app-champions-page',
  templateUrl: './champions-page.component.html',
  styleUrls: ['./champions-page.component.css'],
})
export class ChampionsPageComponent implements OnInit {
  champions: Champion[] = [];
  filteredChampions: Champion[] = [];
  isLoading: boolean = false;
  isError: boolean = false;


  filter: Filter = {
    search: '',
  };

  constructor(private championsService: ChampionsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchChampions();
  }

  fetchChampions() {
    this.championsService.getChampions().subscribe(
      (response) => {
        this.champions = Object.values(response.data);
        this.filteredChampions = Object.values(response.data);
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

  handleSearchInput(search: string) {
    this.filter = { ...this.filter, search: search };
    this.filterChampions(this.filter);
  }

  filterChampions(filters: Filter) {
    console.log('my filtermethod is called');
    const newChampArray = this.champions.filter((champion) =>
      champion.name?.toLowerCase().includes(filters.search.toLowerCase())
    );
    this.filteredChampions = newChampArray;
  }
}
