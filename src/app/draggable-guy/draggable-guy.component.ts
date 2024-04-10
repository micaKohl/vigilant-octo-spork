import { Component, Input } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-draggable-guy',
  templateUrl: './draggable-guy.component.html',
  styleUrls: ['./draggable-guy.component.scss'],
  standalone: true,
  imports: [CdkDrag, MatIconModule, CommonModule]
})
export class DraggableGuyComponent {
  @Input() message = "";

}
