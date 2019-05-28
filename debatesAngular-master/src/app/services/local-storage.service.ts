import { Injectable, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  constructor(private storage: WebStorageService) { }


  public storeOnLocalStorage(keyName: string,value: string): void {
    
    // get array of tasks from local storage
    const currentTodoList = this.storage.get('local_storage') || [];
    
    // push new task to array
    currentTodoList.push({
        key: keyName,
        value: value 
    });

    // insert updated array to local storage
    this.storage.set('local_storage', currentTodoList);
    console.log(this.storage.get('local_storage') || 'LocaL storage is empty');
  }
}