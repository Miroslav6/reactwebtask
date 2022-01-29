import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Axios } from "axios";
import { productData } from "../db-products";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ImageGallery from 'react-image-gallery';

const ProductPage = (props) => {

  const { productId } = useParams();
  const usedProduct = productData.find(({ id }) => id == productId);

  const images = usedProduct.images;

  useEffect(() => {
    
  }, [])

  return (
    <div className="container mt-5">
      <div className='mb-4' role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Начало
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/products"
          >
            Гуми
          </Link>
          <Typography color="text.primary">{usedProduct.position} {usedProduct.sizewidth} {usedProduct.sizeheight} {usedProduct.sizediameter} {usedProduct.brand} {usedProduct.model} </Typography>
        </Breadcrumbs>
      </div>
      <div className='row'>
        <div className='col col-sm-6'>
          <ImageGallery items={images} />
        </div>
        <div className='col col-sm-6 entry-content'>
          <div> <img loading="lazy" src= {'/Files/Images/Products/'+usedProduct.brand+'.png'} alt="Brand image" className='product-brand-image'/> </div>
          <h1 className='product-title'>{usedProduct.position} {usedProduct.brand} {usedProduct.model} {usedProduct.sizewidth} {usedProduct.sizeheight} {usedProduct.sizediameter}</h1>
          <p className='product-price'><bdi>{usedProduct.price} <span className='price-currency-symbol'>лв</span></bdi></p>
          <ul>
            <li><strong>Марка</strong> - {usedProduct.brand}</li>
            <li><strong>Размер</strong> - {usedProduct.sizewidth} {usedProduct.sizeheight} {usedProduct.sizediameter}</li>
            <li><strong>DOT</strong> - {usedProduct.DOT}</li>
            <li><strong>Тип</strong> - {usedProduct.type}</li>
          </ul>
          <p>За поръчки и консултация се свържете с наш консултант</p>
          <a href='tel:+359883378679' className='h3 hd-phone'><i className="bi bi-telephone"></i> +359 883378679</a>
        </div>
        <div className='col col-sm-12'>
          <h2>Описание за продукта</h2>
          <div dangerouslySetInnerHTML={{ __html: usedProduct.description }} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;