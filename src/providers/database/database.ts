import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Categories } from '../../Model/Categories';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DatabaseProvider {
  options: any = {
    name: 'data.db',
    location: 'default'
  };
  private db: SQLiteObject;
  private databaseReady = new BehaviorSubject(false);
  constructor(public http: HttpClient, private sqlite: SQLite) {
  
  }

  public connectToDb(): void {
      this.sqlite.create(this.options).then((_db: SQLiteObject) => {
        this.db = _db;
         var sql = 'create table IF NOT EXISTS `category`(id varchar(255), name varchar(255), description varchar(255), status integer)';
        _db.executeSql(sql, []).then(data => {
          this.databaseReady.next(true);
        });
       })
         .catch(e => console.log(e));
  }

  addCategory(category: Categories) {
    var sql = "INSERT INTO `category` (id,name,description,status) VALUES ('" + category.id + "','" + category.name + "','" + category.description + "','" + category.status + "')";
    return this.db.executeSql(sql, []);
  }

  getCategory(): any {
    var sql = "SELECT * FROM category";
    return this.db.executeSql(sql, []);
  }

  getDatabaseState(){
    return this.databaseReady.asObservable();
  }
}
