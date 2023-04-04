import React from "react";
import "./Wishlist.css";
import book1 from "../assets/images/ExBook1.jpg";
import book2 from "../assets/images/ExBook2.jpeg";

function Wishlist() {
  return (
    <div>
      <div id="products" class="row list-group">
        <div class="item  col-xs-4 col-lg-4">
          <div class="thumbnail">
            <img class="group list-group-image" src={book1} alt="" />
            <div class="caption">
              <h4 class="group inner list-group-item-heading">Shadow Born</h4>
              <p class="group inner list-group-item-text"></p>
              <div class="row">
                <div class="col-xs-12 col-md-6"></div>
                <div class="col-xs-12 col-md-6">
                  <a
                    class="btn btn-success"
                    href="http://www.jquery2dotnet.com"
                  >
                    Exchange
                  </a>
                  <a
                    class="btn btn-success"
                    href="http://www.jquery2dotnet.com"
                  >
                    Sell
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item  col-xs-4 col-lg-4">
          <div class="thumbnail">
            <img class="group list-group-image" src={book2} alt="" />
            <div class="caption">
              <h4 class="group inner list-group-item-heading">
                A Women Warrior
              </h4>
              <p class="group inner list-group-item-text"></p>
              <div class="row">
                <div class="col-xs-12 col-md-6"></div>
                <div class="col-xs-12 col-md-6">
                  <a
                    class="btn btn-success"
                    href="http://www.jquery2dotnet.com"
                  >
                    Exchange
                  </a>
                  <a
                    class="btn btn-success"
                    href="http://www.jquery2dotnet.com"
                  >
                    Sell
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
