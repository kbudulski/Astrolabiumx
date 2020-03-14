import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LaunchService } from '../launch.service';
import { LaunchModel } from '../launch.model';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})

export class DataTableComponent {
    displayedColumns: string[] = ['flight_number', 'rocket_name', 'launch_date_local', 'launch_success'];
    dataSource: MatTableDataSource<LaunchModel>;
    launches: LaunchModel[] = [];
    expandedElement: LaunchModel | null;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    flightSelection: string;

    constructor(private launchService: LaunchService) {
        this.updateFlights();
    }

    updateFlights() {
        this.launchService.getLaunchConfig(this.flightSelection).subscribe(launches => {
            this.launches = launches;
            this.dataSource = new MatTableDataSource(launches);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.sort.sort({id: 'flight_number', start: 'desc', disableClear: false});
        });
    }

    checkMissionStatus(status) {
        if (status === true) {
            return 'Success';
        } else if (status === false) {
            return 'Failure';
        } else {
            return '';
        }
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
