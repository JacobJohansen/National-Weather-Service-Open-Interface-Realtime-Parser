const ProductClasses = require("../Defs/ProductClasses");
const Actions = require("../Defs/Actions");
const Phenomena = require("../Defs/Phenomena");
const Significances = require("../Defs/Significances");

class VTECParser{ // https://www.weather.gov/media/vtec/VTEC_explanation4-18.pdf
    
    constructor(vtec){
        const split_vtec = vtec.split(".");
        const dates = split_vtec[6].split("-");

        this.vtec = {
            class: ProductClasses[split_vtec[0]],
            action: Actions[split_vtec[1]],
            office: split_vtec[2],
            phenomena: Phenomena[split_vtec[3]],
            significance: Significances[split_vtec[4]],
            event_tracking_number: split_vtec[5],
            start:new Date(new Date().getFullYear().toString().substring(0, new Date().getFullYear().toString().length - 2) + dates[0].substring(0, 2) + "-" + dates[0].substring(2, 4) + "-" + dates[0].substring(4, 6) + "T" + dates[0].substring(7, 9) + ":" + dates[0].substring(9, 11) + ":00"),
            end:new Date(new Date().getFullYear().toString().substring(0, new Date().getFullYear().toString().length - 2) + dates[1].substring(0, 2) + "-" + dates[1].substring(2, 4) + "-" + dates[1].substring(4, 6) + "T" + dates[1].substring(7, 9) + ":" + dates[1].substring(9, 11) + ":00"),
            raw_data: {
                class: split_vtec[0],
                action: split_vtec[1],
                office: split_vtec[2],
                phenomena: split_vtec[3],
                significance: split_vtec[4],
                event_tracking_number: split_vtec[5],
                phenomstartena: dates[0],
                end: dates[1],
            }
        }
    }

    return(){
        return this.vtec;
    }
}

module.exports=VTECParser;