import React from 'react';
import './brand.css';
import { google, atlassian, dropbox, shopify, slack } from './imports.js'
export default function Brand(){
  return (
    <div className="gpt__brand section__padding">
      <div>
        <img src={google} alt="google"></img>
      </div>
      <div>
        <img src={atlassian} alt="google"></img>
      </div>
      <div>
        <img src={shopify} alt="google"></img>
      </div>
      <div>
        <img src={dropbox} alt="google"></img>
      </div>
      <div>
        <img src={slack} alt="google"></img>
      </div>
    </div>
  )
}
