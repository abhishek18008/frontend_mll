import React from "react";

const data = [
  {
    RFPCode: "ACCT00015535-3453",
    DueDate: "30 Apr, 2021",
    NoOfLanes: "",
    Comments:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Status: "ACTIVE",
  },
  {
    RFPCode: "ACCT00015535-3454",
    DueDate: "30 Apr, 2021",
    NoOfLanes: "45",
    Comments:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Status: "ACTIVE",
  },
  {
    RFPCode: "ACCT00015535-3455",
    DueDate: "30 Apr, 2021",
    NoOfLanes: "54",
    Comments: "No Comments",
    Status: "ACTIVE",
  },
  {
    RFPCode: "ACCT00015535-3456",
    DueDate: "30 Apr, 2021",
    NoOfLanes: "333",
    Comments:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Status: "INACTIVE",
  },
  {
    RFPCode: "ACCT00015535-3457",
    DueDate: "30 Apr, 2021",
    NoOfLanes: "43",
    Comments:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Status: "ACTIVE",
  },
  {
    RFPCode: "ACCT00015535-3458",
    DueDate: "30 Apr, 2021",
    NoOfLanes: "33",
    Comments: "No Comments",
    Status: "ACTIVE",
  },
  {
    RFPCode: "ACCT00015535-3459",
    DueDate: "30 Apr, 2021",
    NoOfLanes: "20",
    Comments: "No Comments",
    Status: "ACTIVE",
  },
];

const RfpTable = () => {
  return (
    <>
      <table class="table">
        <thead class="table-light">
          <tr>
            <th scope="col">RFPCode</th>
            <th scope="col">Due Date</th>
            <th scope="col">No of Lanes</th>
            <th scope="col">Comments</th>
            <th scope="col">Status</th>
            <th scope="col">Attachment</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rfp, index) => (
            <tr key={index}>
              {/* <th scope="row">{index + 1}</th> */}
              <td>{rfp.RFPCode}</td>
              <td>{rfp.DueDate}</td>
              <td>{rfp.NoOfLanes}</td>
              <td>{rfp.Comments}</td>
              <td>
                {rfp.Status == "ACTIVE" ? (
                  <p style={{ color: "#2BC840" }}>Active</p>
                ) : (
                    <p style={{ color: "gray" }}>Active</p>
                )}
              </td>
              <td>
                <a
                  href="#"
                  class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Download
                </a>
              </td>
              <td>
                <button type="button" class="btn btn-danger">
                  View RFP
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RfpTable;
