import React from 'react'
import styled from 'styled-components';
import resume from '../img/AHS.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img class="mass" src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Sudhan Founder of RajiGroups</span></h4>
                <p className="paragraph">
                    WE CREATE DIGITAL PRODUCTS FOR FORWARD-THINGING ORGANISATONS
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: S.Ari Hara Sudhan</p>
                        <p>: 19</p>
                        <p>: Tamil </p>
                        <p>: Tamil, English </p>
                        <p>: Kadayanallur,India</p>
                        <p>: Freelancer</p>
                    </div>
                </div>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .mass{
        border-radius:50px;
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
