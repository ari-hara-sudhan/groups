import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/design.svg';
import gamedev from '../img/design.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={'We Design Your Dream, Get a website with a stunnig UI and engage your custombers '}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Website Development'} 
                            paragraph={'We Create Beautiful and highly functional websites ,through our dedicated team.'}
                        />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'Search Engine Optimization'} 
                        paragraph={'We design SEO solutions can help you become a digitally more visible and rank higher in the search results.'}
                    />
                  
                    <div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'Tech Stack'} 
                        paragraph={'HTML,CSS,SCASS,JAVASCRIPT,REACTJS,PYTHON,NODEJS,FIREBASE,MONGODB,REACTNATIVE FOR NATIVE APPS,WORDPRESS'}
                    />

               
                    
                      
                    </div>
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
