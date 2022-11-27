import { Fragment } from "react";
import { connect } from "react-redux";
import { useState } from "react";
import Header from "../header/Header";
import CityItem from "./CityItem";

function CityList(props) {
  const [change, setChange] = useState(false);
  const taskAdd = props.state.map((task) => {
    return (
      <Fragment key={task.id}>
        <CityItem
          value={task.value}
          id={task.id}
          change={change}
          setChange={setChange}
        />
      </Fragment>
    );
  });

  return (
    <>
      <Header change={change} setChange={setChange} />
      {taskAdd}
    </>
  );
}

const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps)(CityList);
