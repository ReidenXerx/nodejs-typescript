interface Calculated {
    done: number,
    need_todo: number,
};

export class Calculation {
    private stack: { [key: string]: number } = {
        Activity: 0,
        ActivityBuilder: 0,
        RegardingBuilder: 0,
        XmlTag: 100,
        cacheFactoryService: 100,
        commonDataService: 100,
        accountComponentService: 100,
        accountCrmWebApiService: 100,
        accountRequestsPreparedService: 100,
        accountRequestsService: 100,
        activitiesPreparationRequest: 100,
        activityRequest: 0,
        getFetchXML: 0,
        chromeApiPromisifyer: 100,//77
        commonCrmWebApiService: 100,
        commonRequestService: 99,//99
        commonUtils: 100,//97
        constantService: 100,
        crmQueryService : 100,
        crmWebApiUtilsService : 100,//97
        errorHandlingService: 100,
        licenseService: 100,//99
        localStorageService: 100,
        logService: 100,
        contactComponentService: 100,
        contactCrmWebApiService: 100,
        contactRequestPreparedService: 100,
        contactRequestsService: 100,//98
        commonScrapService: 100,//46
        searchService: 100,
        parseDescription: 67,
        prepareRequestData: 88,
        toDoListService: 100,
    }

    public Calculate(): Calculated {
        let sumDone: number = 0;
        for (const key in this.stack) {
            if (Object.prototype.hasOwnProperty.call(this.stack, key)) {
                sumDone = sumDone + this.stack[key];
            }
        }
        
        return { done: sumDone/(Object.keys(this.stack).length * 100) * 100, need_todo: 100 - sumDone/(Object.keys(this.stack).length * 100) * 100 } 
    }
}