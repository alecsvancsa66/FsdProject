import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface IDesert {
  id: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  sodium: number;
  calcium: number;
  iron: number;
}

const data: IDesert[] = [
  {id: '0', name: 'Frozen Yogurt', calories: 1.59, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: 14, iron: 1},
  {id: '1', name: 'Ice Cream Sandwich', calories: 1.59, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: 14, iron: 1},
  {id: '2', name: 'Ice Cream Sandwich', calories: 1.59, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: 14, iron: 1},
  {id: '3', name: 'Ice Cream Sandwich', calories: 1.59, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: 14, iron: 1},
  {id: '4', name: 'Ice Cream Sandwich', calories: 1.59, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: 14, iron: 1},
  {id: '5', name: 'Ice Cream Sandwich', calories: 1.59, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: 14, iron: 1},
  {id: '6', name: 'Ice Cream Sandwich', calories: 1.59, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: 14, iron: 1},
  {id: '7', name: 'Ice Cream Sandwich', calories: 1.59, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: 14, iron: 1},
  {id: '8', name: 'Ice Cream Sandwich', calories: 1.59, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: 14, iron: 1},
  {id: '9', name: 'Ice Cream Sandwich', calories: 1.59, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: 14, iron: 1},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'calories', 'fat', 'carbs', 'protein', 'sodium', 'calcium', 'iron'];
  dataSource = new MatTableDataSource<IDesert>(data);
  selection = new SelectionModel<IDesert>(true, []);

  ngOnInit(): void {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IDesert): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
