import React, { Component } from "react";

import Table from "../../Components/Tables/Table";

import CustomerList from "../../Assets/Data/CustomerList.json";

import "../Customers/customer.css";

import AddUser from "../../Components/UserForm/AddUser";

const customerHead = ["", "name", "total orders", "total spend"];

/* phone, email, location */

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
    <tr key={index}>
        <td
            style={{
                textAlign: "center",
                fontWeight: "600",
                border: "1px solid transparent",
                padding: "5px 2px",
                color: "var(--textColor)"
            }}
        >
            {item.id}
        </td>
        <td>{item.name}</td>
        <td>{item.totalOrders}</td>
        <td>{item.totalSpend}</td>
    </tr>
);

const renderDataShow = (item, index) => (
    <div>
        <tr key={index}>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.location}</td>
        </tr>
    </div>
);

/* 
<td>{item.email}</td>
  <td>{item.phone}</td>
    <td>{item.location}</td> 
    */

class Transcripts extends Component {
    render() {
        return (
            <div>
                <h2 className="pageHeader">Transcripts</h2>
                <div className="row">
                    <div className="col customerTableArea">
                        <div className="userAddForm w-100" style={{}}>
                            <AddUser />
                        </div>
                        {/* <div className="customerTableInnerArea">
                            <div className="customerTableInner">
                                <Table
                                    limit="10"
                                    headData={customerHead}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    bodyData={CustomerList}
                                    renderBody={(item, index) => renderBody(item, index)}
                                />

                                <div
                                    innerData={CustomerList}
                                    renderDataShow={(item, index) => renderDataShow(item, index)}
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Transcripts;
