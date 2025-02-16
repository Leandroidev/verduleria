import React from 'react';
import './AboutUs.css';
import ImageCard from '../ImageCard/ImageCard';
import ArticleCard from '../ArticleCard/ArticleCard';
function AboutUs() {
    let banner = 'https://images.pexels.com/photos/17626465/pexels-photo-17626465/free-photo-of-comida-acera-frutas-tienda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    let rightImg='https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    let leftImg ='https://images.pexels.com/photos/262967/pexels-photo-262967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    let leftText=`Somos expertos en frescura y calidad, con más de 40 años de experiencia seleccionando los mejores productos para nuestros clientes. Nuestro compromiso es ofrecerte productos frescos, de alta calidad y a precios competitivos.`
    let rightText=`diariamente recorremos cada rincón del Mercado Central, seleccionando con cuidado las frutas y verduras de productores nacionales e internacionales para brindarte una gran variedad con la mejor calidad, al mejor precio.`
        
    return (
        <section className="aboutUs">
          {/* Banner */}
          <figure className="aboutUs-banner">
            <img src={banner} alt="Banner de la empresa" />
          </figure>
    
          {/* Texto Izquierdo */}
          <article className="aboutUs-article">
            <p>{leftText}</p>
          </article>
    
          {/* Imagen Derecha */}
          <ImageCard src={rightImg} alt="Banner de la empresa" />

    
          {/* Imagen Izquierda */}
          <ImageCard src={leftImg} alt="Banner de la empresa" />

    
          {/* Texto Derecho */}
          <article className="aboutUs-article">
            <p>{rightText}</p>
          </article>
        </section>
      );
}

export default AboutUs;