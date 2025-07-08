import React, { Fragment } from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Example from "./components/Example";
import CONDITIONAL_RENDERING from "./CONDITIONAL_RENDERING";
import EVENT_HANDLER_ClASS from "./EVENT_HANDLER_ClASS";
import EVENT_BINDING from "./EVENT_BINDING";
import HOOKS_USESTATE from "./HOOKS_USESTATE/index1";
import HOOKS_USESTATE_2 from "./HOOKS_USESTATE/index2";
import UPDATE_PREVIOUS_STATE from "./UPDATE_PREVIOUS_STATE";
import EVENT_BUBBLING_STOP_PROPAGATION from "./EVENT_BUBBLING_STOP_PROPAGATION";
import COUNTER_APP from "./COUNTER_APP";
import FORM from "./components/FORM/form";
import FORM1 from "./components/FORM/form";
import FORM2 from "./components/FORM/form_useSatate_with_Object";
import CHILD from "./components/STATE_LIFTING/child";
import MORE_ON_STATE from "./components/STATE_LIFTING/more_on_state";
import TODO_APP from "./TODO_APP/App";
import TODO_APPS from "./TODO_APP/App";
import PRACTIC_TODO from "./PRACTIC_TODO/home";
import INVOICE from "./INVOICE_SYSTEM/invoice";
import APP_INVOICE from "./INVOICE_SYSTEM/app";
import FORMIK_PACKAGE from "./formik_package/app";
import TOGGLE from "./TOGGLE/toggle";
import FAQS from "./FAQS/FAQS";
import UseEffectExample from "./HOOKS/useEffect/UseEffectExample";
import DataFetch from "./HOOKS/fetching_data/DataFetch";
import CustomDataFetch from "./HOOKS/customHooks/DataFetch";
import CustomDataFetch_2 from "./HOOKS/customHooks/DataFetch-2";
// import TOASTIFY from "./TOASTIFY/TOASTIFY.js";
import COUNTRY_APP from "./COUNTRY_APP/App.js";
import UseReducer from "./HOOKS/UseReducer/index.js";
import Component1 from "./Prop_drilling/Component1.js";






function App(){
  
    // const data = "I am from parent (app)";

    // const handleChildData = (childData)=>{
    //     console.log("App: " + childData)
    // }

        // const GetChildData = (childData)=>{
        //     console.log(childData)
        // }

         return <div>
                {/* <Card1 name= "card1" desc = "this is card1"/>
                <Card2 name= "card2"/>
                <Example/> */}

                {/* <CONDITIONAL_RENDERING/> */}

                {/* <EVENT_HANDLER_ClASS/> */}

                {/* <EVENT_BINDING/> */}

                {/* <HOOKS_USESTATE/> */}
                {/* <HOOKS_USESTATE_2/> */}

                {/* <UPDATE_PREVIOUS_STATE/> */}
                {/* <EVENT_BUBBLING_STOP_PROPAGATION/> */}
                {/* <COUNTER_APP/> */}
                {/* <FORM1/> */}
                
                {/* <FORM2/> */}
                {/* <CHILD dataParent = {data} onChildData ={handleChildData}/> */}
                {/* <MORE_ON_STATE data ={GetChildData}/> */}
                {/* <TODO_APP/> */}
                {/* <TODO_APPS/> */}
                {/* <PRACTIC_TODO/> */}
                {/* <APP_INVOICE/> */}
                {/* <FORMIK_PACKAGE/> */}
                {/* <TOGGLE/> */}
                {/* <FAQS/> */}
                {/* <UseEffectExample/> */}
                {/* <DataFetch/> */}
                {/* <CustomDataFetch/>
                <CustomDataFetch_2/> */}
                {/* <TOASTIFY/> */}
                {/* <COUNTRY_APP/> */}
                {/* <UseReducer/> */}
                <Component1/>

            </div>
}

export default App;