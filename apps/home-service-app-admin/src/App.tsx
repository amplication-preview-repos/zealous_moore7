import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { ServiceProviderList } from "./serviceProvider/ServiceProviderList";
import { ServiceProviderCreate } from "./serviceProvider/ServiceProviderCreate";
import { ServiceProviderEdit } from "./serviceProvider/ServiceProviderEdit";
import { ServiceProviderShow } from "./serviceProvider/ServiceProviderShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { ServiceRequestList } from "./serviceRequest/ServiceRequestList";
import { ServiceRequestCreate } from "./serviceRequest/ServiceRequestCreate";
import { ServiceRequestEdit } from "./serviceRequest/ServiceRequestEdit";
import { ServiceRequestShow } from "./serviceRequest/ServiceRequestShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HomeServiceApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="ServiceProvider"
          list={ServiceProviderList}
          edit={ServiceProviderEdit}
          create={ServiceProviderCreate}
          show={ServiceProviderShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="ServiceRequest"
          list={ServiceRequestList}
          edit={ServiceRequestEdit}
          create={ServiceRequestCreate}
          show={ServiceRequestShow}
        />
      </Admin>
    </div>
  );
};

export default App;
