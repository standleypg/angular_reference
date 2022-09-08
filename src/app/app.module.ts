import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { TemplateStatementComponent } from './components/template-statement/template-statement.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { PipeDecoratorPipe } from './pipes/pipe-decorator.pipe';
import { PropsBindingComponent } from './components/props-binding/props-binding.component';
import { SizerComponent } from './components/sizer/sizer.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { AttDirectivesDirective } from './directives/att-directives.directive';
import { LogDiComponent } from './log-di/log-di.component';
import { LogService } from './services/log.service';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { MissingPageComponent } from './pages/missing-page/missing-page.component';
import { ChildAComponent } from './pages/child-a/child-a.component';
import { ChildBComponent } from './pages/child-b/child-b.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveDrivenFormComponent } from './components/reactive-driven-form/reactive-driven-form.component';
import { HttpClientGetComponent } from './components/http-client-get/http-client-get.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TemplateStatementComponent,
    PipeComponent,
    PipeDecoratorPipe,
    PropsBindingComponent,
    SizerComponent,
    DirectivesComponent,
    AttDirectivesDirective,
    LogDiComponent,
    Page1Component,
    Page2Component,
    MissingPageComponent,
    ChildAComponent,
    ChildBComponent,
    TemplateDrivenFormComponent,
    ReactiveDrivenFormComponent,
    HttpClientGetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
