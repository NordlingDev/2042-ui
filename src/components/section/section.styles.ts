import styled, { css } from "styled-components";

type CommonProps = {

};

type RootProps = CommonProps & {
    // ...
};

export const Root = styled.div<RootProps>(({ theme }) => css`
    position: relative;
    width: 100%;
    border-top: 1px solid ${theme.palette.whiteAlpha(0.25)};
`);

export const Title = styled.h2(({ theme }) => css`
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(2)}px 0;
    font-size: 20px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-bottom: 1px solid ${theme.palette.whiteAlpha(0.25)};
`);

export const Content = styled.div``;
