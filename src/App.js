import React from "react";
import DataGrid, { Column } from "devextreme-react/data-grid";
import { Button } from "devextreme-react/button";

import { customers } from "./data.js";

class App extends React.Component {
  onClick(id) {
    console.log(id);
  }
  render() {
    return (
      <DataGrid dataSource={customers} showBorders={true}>
        <Column
          width={100}
          dataField="Actions"
          type="buttons"
          cellRender={(value) => {
            // console.log(value.data.ID)
            return (
              <div>
                <Button
                  icon="trash"
                  onClick={() => this.onClick(value.data.ID)}
                  style={{ border: "none" }}
                />
                <Button
                  icon="edit"
                  onClick={this.onClick}
                  style={{ border: "none" }}
                />
              </div>
            );
          }}
          // headerCellRender={renderHeaderCell}
        />
        <Column dataField="CompanyName" caption="Title" />
        <Column dataField="City" />
      </DataGrid>
    );
  }
}

export default App;
