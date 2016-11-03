"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by foxjazz on 9/30/16.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var config_1 = require('./config');
require('rxjs/add/operator/map');
var LoginService = (function () {
    function LoginService(h) {
        this.h = h;
        this.uri = config_1.config.node;
        this.http = h;
    }
    LoginService.prototype.login = function (loginData) {
        var _this = this;
        this.login2(loginData).subscribe(function (test) { return _this.data = test; });
        return true;
    };
    LoginService.prototype.login2 = function (loginData) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var uriplus = this.uri + '/login';
        return this.http.post(uriplus, loginData, options)
            .map(this.data);
    };
    LoginService.prototype.register = function (loginData) {
        this.register2(loginData); // .subscribe(test => this.data = test);
        return true;
    };
    LoginService.prototype.register2 = function (loginData) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var uriplus = this.uri + '/signin';
        var ld = JSON.stringify(loginData);
        this.http.post(uriplus, ld, options)
            .subscribe(function (response) {
            console.log(response.json().id_token);
            localStorage.setItem('id_token', response.json().id_token);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    LoginService = __decorate([
        core_1.Injectable()
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
