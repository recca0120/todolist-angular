import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {TodoService, TodoStatus} from './todo.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let service: TodoService;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [AppComponent],
          providers: [TodoService],
          schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TodoService);
  })

  it('should have 4 todos', () => {
    fixture.detectChanges();
    expect(component.todoList.length).toEqual(4);
  });

  it('should have 4 todos', () => {
    spyOn(service, 'get').and.returnValue([]);
    fixture.detectChanges();
    expect(component.todoList.length).toEqual(0);
  });

  it('filter是all時，應回傳所有的資料', () => {
    fixture.detectChanges();
    component.filter(TodoStatus.all);
    expect(component.todoList.length).toEqual(4);
  })

  it('filter是active時，應回傳未完成的資料', () => {
    fixture.detectChanges();
    component.filter(TodoStatus.active);
    expect(component.todoList.length).toEqual(3);
  })

  it('filter是complete時，應回傳完成的資料', () => {
    fixture.detectChanges();
    component.filter(TodoStatus.completed);
    expect(component.todoList.length).toEqual(1);
  });

  it('dom', () => {
    let de = fixture.debugElement;
    let el = de.nativeElement;
    fixture.detectChanges();
    const button: HTMLElement = el.querySelector('#activeFilter');
    button.click();
    expect(component.todoList.length).toEqual(3);
  })
});
