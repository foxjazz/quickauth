"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_providers_1 = require('./app.providers');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var shared_1 = require('./shared');
var home_module_1 = require('./home/home.module');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var todolist_module_1 = require('./todolist/todolist.module');
var login_module_1 = require('./login/login.module');
var signin_module_1 = require('./signin/signin.module');
var forms_1 = require('@angular/forms');
var region_module_1 = require('./regions/region.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                shared_1.NavbarModule,
                home_module_1.HomeModule,
                todolist_module_1.TodolistModule,
                login_module_1.LoginModule,
                signin_module_1.SignInModule,
                app_routing_1.routing,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                region_module_1.RegionModule,
            ],
            providers: [app_providers_1.APP_PROVIDERS, app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map