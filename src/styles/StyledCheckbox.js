import styled from 'styled-components';

const StyledCheckbox = styled.label
    `
display:block;
position: relative;
user-select: none;

input{
    display: none;
    &:checked ~ span{
        background: #754dff;

        &::after{
            display: block;
        }
    }
}

span {
    position: absolute;
    top:0;
    left:0;
    height: 1px;
    width: 1px;
    background: #dacfff;
    transition: background 0.3s ease;  


&::after{
    content: '' ;
    postion: absolute;
    left: 1rem;
    width: 0.8 rem;
    height: 2rem;
    border: solid white;
    border-width: 0 4px 4px 0;
    transfom: rotate(45deg);
    display:none;
}
}

`
export default StyledCheckbox;