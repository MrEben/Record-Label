import React, { useState } from 'react';
import { FaCrown } from 'react-icons/fa';
import { AiFillCaretRight } from 'react-icons/ai';
import './works.css';
import { packages } from './data';
import OffersHead from './OffersHead';
import Card from '../UI/Card';

function Works() {
  return (
    <main>
      <section id="works" className="container offers-container">
        <OffersHead
          className="offers-head"
          icon={<FaCrown />}
          title="What we offer"
        />
        <div className="offers-wrapper">
          {packages.map((item) => {
            const { id, title, url, icon, info } = item;
            return (
              <Card key={id} className="each-offer">
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <a href={url} className="btn sm">
                  learn more <AiFillCaretRight />
                </a>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Works;
