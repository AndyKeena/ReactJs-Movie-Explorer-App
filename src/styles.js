// styles.js
import styled from 'styled-components';

export const HeaderStyle = styled.header`

background-color: lightblue;
color: black;
padding: 1rem;
text-align: center;
    font-family: "Times New Roman", cursive;


    h1 {
  margin: 0;
        font-size: 50px;
}

nav {
  margin-top: 1rem;

  a {
    color: black;
    margin-right: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: darkblue
    }
    

  }
}
`;

export const MovieListStyle = styled.div`
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 200px;
    text-align: center;
    font-family: "Times New Roman", cursive;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }

    h3 {
        margin: 0.5rem 0;
    }

    p {
        color: #666;
    }

    width: 200px;
    height: 400px;
    `;

export const MovieListContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
    font-family: "Times New Roman", cursive;

`;
