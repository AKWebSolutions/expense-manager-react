import React, { Component } from 'react';
import GenerateExcel from './../Common/GenerateExcel'

import * as utils from '../Util'

class ExportToExcel extends Component {
    constructor(props){
        super(props)
    }

    render() {

        let expenses = this.props.expenses;
        let currentUser = this.props.authUser;

        if (!expenses || !currentUser) {
            return <div> Loading ... </div>
        }

        if (expenses && currentUser) {
            let eachExpense = utils.eachExpense(expenses)
            let thisUsersExpenses = utils.currentUsersExpenses(eachExpense, currentUser)
            var excelDataObject = thisUsersExpenses.map((exp) => exp.value);

            let exportArea = {
                "backgroundColor": "#324858",
                "color": "#DEDA54",
                "padding": "10px",
                "borderRadius": "5px",
                "marginTop": "15px"
            }

            return (
                <div className="col-sm-12" style={exportArea}>
                    <GenerateExcel excelDataObject={excelDataObject} />
                </div>
            )
        }
    }
}

export default ExportToExcel