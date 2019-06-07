import React from 'react';
import styled, {css} from 'styled-components';

const Username = styled.h3`
    font-size: 14px;
    margin-block-start: 0;
    margin-block-end: 0;

    ${props => props.header && css`
        font-size: 16px;
        margin-left: 10px;
    `};
`;

export {Username};