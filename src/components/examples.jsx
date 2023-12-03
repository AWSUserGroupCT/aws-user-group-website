import { Fragment, useState } from "react";
import AccountMenu from "./core/AccountMenu";
import Footer from "./core/Footer";
import { useAuth0 } from "@auth0/auth0-react";

interface ExampleProps {
  items: string[];
  onSelectItem: (item: string) => void;
}

function ExampleGroup({ items, onSelectItem }: ListExampleProps) {
  const message = items.length === 0 && <p>no items to show</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { user } = useAuth0();

  return (
    <Fragment>
      <AccountMenu />
      <h2 style={{ color: "#800080" }}>
        Welcome to AWS User Group Connecticut, {user?.name ?? "!"}
      </h2>{" "}
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
      <Footer />
    </Fragment>
  );
}

export default ListGroup;
