//imports

import React, { useEffect, useState } from 'react';
import { Container, Row, Accordion, Col } from 'react-bootstrap';
import getData from '../utils/data.js';
import { getLocalStorage, setLocalStorage } from '../utils/localstorage';

export default function Menu() {
  const ENDPOINT = 'item';
  const [menu, setMenu] = useState([]);
  
  useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
      setMenu(data);
    } else {
      getData(ENDPOINT)
        .then((data) => {
          setMenu(data);
          setLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

  return (
    <main style={{ padding: "1rem 0" }} className="container">
      <div className="row justify-content-center text-center gap-2">
        <h2>Menu</h2>
        <Item />
        {/* {menu.map((menu) => <Menus key={menu.id} Menus={menu} />)} */}
      </div>
    </main>
  );
}

//some sort of tabbed menu that calls the API more specifically whenever a specific tab is opened
const Item = ({ Menus }) => {
  return (
        <Container>
            <Row>
              <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Apple</Accordion.Header>
                <Accordion.Body>
                <Row className="justify-content-md-left">
                  <Col>This is where the image would live</Col>
                  <Col md="auto">It's an Apple.  You know what's going on, here.</Col>
                  <Col xs lg="2">
                    Price goes here.
                  </Col>
                </Row>
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
              </Row>
        </Container>
  )
}