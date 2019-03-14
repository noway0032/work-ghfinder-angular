import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../../shared/service/search.service';

@Component({
  selector: 'app-button-topic',
  templateUrl: './button-topic.component.html',
  styleUrls: ['./button-topic.component.scss']
})
export class ButtonTopicComponent implements OnInit {
  @Input() result: string;

  constructor(
    private _searchService: SearchService) { }

  ngOnInit() {
  }

  topicDel(value: string) {
    this._searchService.topicRem(value);
  }

}
