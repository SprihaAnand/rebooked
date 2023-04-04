import React from "react";
import "./School.css";

function School() {
  return (
    <div>
      <div class="main">
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            class="form-control"
            placeholder="Search Users By School"
          />
        </div>
      </div>

      <table class="container1">
        <thead>
          <tr>
            <th>
              <h1>Users</h1>
            </th>
            <th>
              <h1>School</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spriha</td>
            <td>NIT Hamirpur</td>
          </tr>
          <tr>
            <td>Aryan</td>
            <td>National Institute of Technology Hamirpur</td>
          </tr>
          <tr>
            <td>Manya</td>
            <td>St Lukes Sen Sec School , Solan</td>
          </tr>
          <tr>
            <td>Satvik</td>
            <td>St Lukes Sen Sec School , Solan</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default School;
