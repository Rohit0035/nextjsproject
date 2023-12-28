import React from "react";

const InvoiceList = () => {
  return (
    <>
      <div className="doctor-vaccination-table table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th className="tb-color-2">Invoice ID</th>
              <th className="tb-color-3">User Name</th>
              <th className="tb-color-4">User Mobile</th>
              <th className="tb-color-5">User Email</th>
              <th className="tb-color-6">User Address</th>
              <th className="tb-color-6">Booking</th>
              <th className="tb-color-7">Invoice Date</th>
              <th className="tb-color-8">Amount</th>
              <th className="tb-color-9">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td className="tb-color-2">
                <span>1121212</span>
              </td>
              <td>
                <span>John</span>
              </td>
              <td>
                <span>334344434343</span>
              </td>
              <td>
                <span>Info@gmail.com</span>
              </td>

              <td>
                <span>Lorem Ipsum</span>
              </td>
              <td>
                <span>5 Hours</span>
              </td>
              <td>
                <span>25-12-23</span>
              </td>
              <td>
                <span>$234</span>
              </td>
              <td>
                <span>
                  <i className="bx bx-trash"></i>
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span>1</span>
              </td>
              <td className="tb-color-2">
                <span>1121212</span>
              </td>
              <td>
                <span>John</span>
              </td>
              <td>
                <span>334344434343</span>
              </td>
              <td>
                <span>Info@gmail.com</span>
              </td>

              <td>
                <span>Lorem Ipsum</span>
              </td>
              <td>
                <span>5 Hours</span>
              </td>
              <td>
                <span>25-12-23</span>
              </td>
              <td>
                <span>$234</span>
              </td>
              <td>
                <span>
                  <i className="bx bx-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td className="tb-color-2">
                <span>1121212</span>
              </td>
              <td>
                <span>John</span>
              </td>
              <td>
                <span>334344434343</span>
              </td>
              <td>
                <span>Info@gmail.com</span>
              </td>

              <td>
                <span>Lorem Ipsum</span>
              </td>
              <td>
                <span>5 Hours</span>
              </td>
              <td>
                <span>25-12-23</span>
              </td>
              <td>
                <span>$234</span>
              </td>
              <td>
                <span>
                  <i className="bx bx-trash"></i>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InvoiceList;
