import { useLayoutEffect, useState } from "react";

// Les composants React communiquent entre eux avec des props
// Tout composant peut recevoir des props en parametre
// Les props sont des objets dont l'utilisation est
// similaire a celle des attributs HTML

export default function PropsExample({ name, childClickHandler }) {
  const data = [
    {
      phone: "(319) 586-1183",
      email: "dui.in.sodales@hotmail.ca",
      address: "265-6020 Enim. Av.",
      name: "Xandra Bell",
    },
    {
      phone: "(713) 126-6364",
      email: "et@icloud.com",
      address: "8771 Nulla. Av.",
      name: "Rashad Lamb",
    },
    {
      phone: "(370) 465-5000",
      email: "ut.pellentesque.eget@icloud.couk",
      address: "956-3473 Aliquam St.",
      name: "Bell Heath",
    },
    {
      phone: "1-436-244-8813",
      email: "at.risus@google.ca",
      address: "P.O. Box 875, 3798 Ultrices Rd.",
      name: "Leilani Erickson",
    },
    {
      phone: "1-329-668-9391",
      email: "pellentesque.eget@hotmail.net",
      address: "876-1848 Laoreet Street",
      name: "Herman Patrick",
    },
  ];
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="card">{name}</div>
      <button
        onClick={() => {
          setVisible(!visible);
          childClickHandler("test");
        }}
      >
        click me !
      </button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {visible && (
        <ul>
          {[1, 2, 3, 4].map((item, i) => (
            <div key={item}>{item}</div>
          ))}
          {/* {data.map((item) => (
            <>
              <li key={item.phone}>
                <div>{item.name}</div>
                <div>{item.phone}</div>
                <div>{item.email}</div>
                <div>{item.address}</div>
              </li>
              <br />
            </>
          ))} */}
        </ul>
      )}
    </>
  );
}
