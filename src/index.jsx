import * as $ from 'jquery'
import Post from '@models/Post'
import json from './assets/json.json'
import React from 'react'
import { render } from 'react-dom'
import './babel.js'
import './styles/styles.css'
import './styles/less.less'
import './styles/sass.sass'
import catLogo from '@/assets/cat'
import xml from './assets/data.xml'
import csv from './assets/test.csv'

const post = new Post('Wbpack post title', catLogo)

// $('pre').addClass('post').html(post.toString())

const App = () => (
  <div className="container">
    <h1>Webpack</h1>

    <hr />

    <div className="logo"></div>

    <hr />

    <pre></pre>
    <div className="box">LESS</div>
    <div className="card">SASS</div>
  </div>
)

render(<App />, document.getElementById('app'))

console.log(post.toString())
console.log('JSON', json)
console.log('XML', xml)
console.log('CSV', csv)
