import React from "react";
import { List, Filter, Datagrid, TextField, SearchInput } from "react-admin";
const PizzaList = (props) => {
  return (
    <div>
      <List {...props}>
        <Datagrid>
          <TextField source="first_name" />
        </Datagrid>
      </List>
    </div>
  );
};

export default PizzaList;
//http://localhost:9090/api/pizza/
