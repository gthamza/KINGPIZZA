import React from 'react'
import Menubar from '../components/Menubar.jsx'
import Everydayvalue from '../components/Everydayvalue.jsx'
import ALA from '../components/ALA.jsx'
import Promotion from '../components/Promotion.jsx'
import Signature from '../components/Signature.jsx'
import Snacks from '../components/Snacks.jsx'
import Midnight from '../components/Midnight.jsx'



function Menu() {
  return (
    <>
    <Menubar></Menubar>
    <Everydayvalue></Everydayvalue>
    <ALA></ALA>
    <Promotion></Promotion>
    <Signature></Signature>
    <Snacks></Snacks>
    <Midnight></Midnight>
    </>
)
}

export default Menu