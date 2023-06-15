import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import cartElements from './cartElement';
import { ImYoutube, ImSpotify } from 'react-icons/im';
import { SiFacebook } from 'react-icons/si';
import { AuthContext } from '../Store/AuthContext';

const ProductDetails = () => {
    const { id } = useParams();
    console.log(id)
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchProductDetails = () => {
            const foundProduct = cartElements.find(item => item.id === Number(id));
            setProduct(foundProduct);
        };
        console.log(product)

        fetchProductDetails();
    }, [id]);

    const handleImageClick = () => {
        setZoomedIn(true);
    };

    // State variable for controlling modal visibility
    const [zoomedIn, setZoomedIn] = useState(false);

    // Function to close the modal
    const closeModal = () => {
        setZoomedIn(false);
    };

    const authCtx = useContext(AuthContext);
    const addCartHandler = (item) => {
        authCtx.addToCart(item);
    }

    return (
        <>
            <section className='m-5'>
                {product ? (
                    <div className="container py-2 shadow text-center">
                        <div className="row my-5">
                            <div className="col d-flex justify-content-center gap-3 flex-column">
                                <h2 className='shadow text-center' style={{ fontFamily: 'Operator Mono' }}>{product.title}</h2>
                                <h2 className='shadow text-center'>Price ${product.price}</h2>
                                <div>
                                    <button className='btn shadow btn-warning h3' onClick={() => addCartHandler(product)}>Add to Cart</button>
                                </div>
                            </div>
                            <div className="col-md-6 w-500 h-100 text-center">
                                <img
                                    src={product.imageUrl}
                                    alt="product"
                                    className="img-fluid w-100"
                                    style={{ maxHeight: '400px', cursor: 'zoom-in' }}
                                    onClick={handleImageClick}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </section>
            <footer className='bg-info mt-3 h-75 overflow-hidden'>
                <ul className='d-flex justify-content-evenly align-content-center'>
                    <li className='p-5 display-4 list-group-item' style={{ fontFamily: 'italic', color: 'white' }}>The Generics</li>
                    <li className='mt-5 list-group-item'><Link to="https://www.youtube.com"><ImYoutube size={'60px'} /></Link></li>
                    <li className='mt-5 list-group-item'><Link to="https://www.youtube.com"><ImSpotify size={'60px'} /></Link></li>
                    <li className='mt-5 list-group-item'><Link to="https://www.youtube.com"><SiFacebook size={'60px'} /></Link></li>
                </ul>
            </footer>

            {/* Modal for zoomed-in image */}
            {zoomedIn && (
                <div className="modal" style={{ display: 'block', background: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                {/* Render the zoomed-in image here */}
                                <img src={product.imageUrl} alt="product" style={{ width: '100%', maxHeight: '80vh' }} />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetails;