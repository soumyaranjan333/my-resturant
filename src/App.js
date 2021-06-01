import React, { Component } from 'react'
import Dish from './Dish'
import './App.css'

class App extends Component {
  state={
    dishes:[
      {image:"./image/butter-chicken_1.webp",name:"Butter Chicken",ratings:4.3,reviews:"11.3k",category:"Chinees,North Indian,Biriyani,Desserts",cost:"150 for one",time:"32 min",id:1},
      {image:"./image/nihari_gosht-2.jpg",name:"Nihari Gosht",ratings:4.2,reviews:"10.3k",category:"Chinees,North Indian,Biriyani,Desserts",cost:"250 for one",time:"20 min",id:2},
      {image:"./image/prawn-curry-3.jpg",name:"Prawn Curry",ratings:3.3,reviews:"8.3k",category:"Chinees,North Indian,Biriyani,Desserts",cost:"80 for one",time:"40 min",id:3},
      {image:"./image/chicken-65-4.webp",name:"Chicken 65",ratings:2.4,reviews:"5.3k",category:"Chinees,North Indian,Biriyani,Desserts",cost:"110 for one",time:"45 min",id:4},
      {image:"./image/fish-finger5.webp",name:"Fish Fingers",ratings:4.7,reviews:"13.7k",category:"Chinees,North Indian,Biriyani,Desserts",cost:"120 for one",time:"15 min",id:5},
      {image:"./image/keema-samosa-6.webp",name:"keema samosa",ratings:1.3,reviews:"2.3k",category:"Chinees,North Indian,Biriyani,Desserts",cost:"180 for one",time:"35 min",id:6},
      {image:"./image/Malabar-fishbiryani-7.webp",name:"Malabar fish biryani",ratings:2.5,reviews:"3.8k",category:"Chinees,North Indian,Biriyani,Desserts",cost:"100 for one",time:"28 min",id:7},
      {image:"./image/tandoori-lamb-chops-8.webp",name:"Tandoori lamb chops",ratings:3.9,reviews:"4.7k",category:"Chinees,North Indian,Biriyani,Desserts",cost:"190 for one",time:"17 min",id:8},
      {image:"./image/motton-korma-9.webp",name:"Motton korma",ratings:4,reviews:"10.5k",category:"Chinees,North Indian,Biriyani,Desserts",cost:"200 for one",time:"50 min",id:9},
      {image:"./image/grilled-chicken-10.webp",name:"Grilled chicken",ratings:0.7,reviews:"2.3k",category:"Chinees,North Indian,Biriyani,Desserts",cost:"160 for one",time:"28 min",id:10},
    ]
  }

  filterDish=(rating1,rating2)=>{ 
      let dishes=this.state.dishes.filter(dish=>{
        return (dish.ratings >= rating1 && dish.ratings < rating2)
      })
    this.setState({
      dishes:dishes
    })
  } 
  
  render() {
    return (
      <div>  
        <div className="container bg-warning">
        <button onClick={()=>this.filterDish(4,5)} type="button" className="btn btn-success mx-2 mt-4">Rating 4</button>
        <button  onClick={()=>this.filterDish(3,4)} type="button" className="btn btn-primary mx-2 mt-4">Rating 3</button>
        <button onClick={()=>this.filterDish(2,3)} type="button" className="btn btn-info mx-2 mt-4">Rating 2</button>
        <button onClick={()=>this.filterDish(0,2)} type="button" className="btn btn-danger mx-2 mt-4">Rating 1</button>
        {/* <button onClick={this.noFilter} type="button" className="btn btn-dark mx-2 mt-4">All dishes</button> */}
        <div className="row row-cols-1 mt-0 row-cols-md-3 g-4 my-5 pb-4">
        <Dish filterDish={this.filterDish} dishes={this.state.dishes}/>
        
      </div>
      </div>
      </div>
    )
  }
}

export default App
