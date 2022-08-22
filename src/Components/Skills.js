import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'Techs'} span={'Tech Stacks'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'100%'}
                            text={'100%'}
                        />
                          <ProgressBar 
                            title={'FIGMA'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'REACT.js'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'NODE.js'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'FIREBASE'}
                            width={'100%'}
                            text={'100%'}
                        />
                         <ProgressBar 
                            title={'REACT NATIVE'}
                            width={'100%'}
                            text={'100%'}
                        />
                         <ProgressBar 
                            title={'WORDPRESS'}
                            width={'100%'}
                            text={'100%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
