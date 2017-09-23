import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let service: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[TodoService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TodoService);
  })
  
  it('should have 4 todos',()=>{
    fixture.detectChanges();
    expect(component.todoList.length).toEqual(4);
  });
  
  it('should have 4 todos',()=>{
    spyOn(service, 'get').and.returnValue([]);
    fixture.detectChanges();
    expect(component.todoList.length).toEqual(0);
  })
});
