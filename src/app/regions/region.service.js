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
/**
 * Created by fox21 on 11/16/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var RegionService = (function () {
    function RegionService(http) {
        this.http = http;
        this.uri = 'https://crest-tq.eveonline.com/regions/';
        this.uriSys = '';
    }
    RegionService.prototype.getRegions = function () {
        return this.http.get(this.uri)
            .map(function (res) { return res.json(); });
    };
    RegionService.prototype.getSystems = function (id) {
        //https://crest-tq.eveonline.com/market/10000002/orders/?type=https://crest-tq.eveonline.com/inventory/types/34/
        var uriSys = 'https://crest-tq.eveonline.com/market/' + id + '/orders/?type=https://crest-tq.eveonline.com/inventory/types/34/';
        return this.http.get(uriSys)
            .map(function (res) { return res.json(); });
    };
    RegionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RegionService);
    return RegionService;
}());
exports.RegionService = RegionService;
//# sourceMappingURL=region.service.js.map