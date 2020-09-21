var enterWantedPage = {}
var completeWanted = (object,data) =>{
        
        object
            .setValue ('@header',data.header)
            .setValue ('@mke',data.mke)
            .setValue ('@ori',data.ori)
            .setValue ('@name',data.name)
            .useXpath()
            .click (`//*[@value="${data.sex}"]`)
            .click(`//*[@value="${data.race}"]`)
            .useCss()
            .setValue ('@height',data.height)
            .setValue ('@weight',data.weight)
            .setValue ('@hair',data.hair)
            .setValue ('@offense',data.offense)
            .setValue ('@warrantDate',data.warrantDate)
            .pause(3000)
            .click('#saveBtn')
            .verify.containsText('@errorDisplay',"field should be between 9 and 19 characters long")
        }
        var wantedQuery = { 
            header: "Header test to make sure more than 19 characters are not allowed",
            mke: "MKE",
            ori: "123456789",
            name: "Donovan Mitchell",
            sex: "M",
            race: "B",
            height: "601",
            weight: "204",
            hair: "Blonde",
            offense: "Being Awesome",
            warrantDate: "09/09/2020"}
        



module.exports = {
    beforeEach: browser => {
        enterWantedPage=browser.page.wantedPage()
        enterWantedPage
        .navigate()
        .waitForElementPresent("#root")
    },
    after: browser=> {
        enterWantedPage.end()
    },
    'Check the header max': browser => {
        completeWanted(enterWantedPage,wantedQuery)
        }
        
}
