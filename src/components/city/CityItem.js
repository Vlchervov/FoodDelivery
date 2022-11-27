import { connect } from "react-redux";
import { Transition } from "react-transition-group";
import { ListItem, Modal } from "../../styled-components/cityItem.styled";

function cityItem(props) {
  return (
    <>
      <Transition in={props.change} timeout={2} mountOnEnter unmountOnExit>
        <Modal>
          <div>
            <button
              onClick={() => {
                props.setChange(false);
              }}
            >
              Закрыть
            </button>
            {props.state.map((item) => (
              <ListItem key={item.id}>{item.value}</ListItem>
            ))}
          </div>
        </Modal>
      </Transition>
    </>
  );
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(cityItem);
