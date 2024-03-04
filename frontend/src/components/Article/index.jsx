import colors from '../../utils/style/colors';
import styled from 'styled-components';

const StyledArticleContainer = styled.div`
    width: 29vw;
    height: 250px;
    margin-bottom: 1rem;
    margin-right: 2vw;
    border-radius:10%;
    border: solid 1px ${colors.primary};
    background-color: ${colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    & .articleContainer_summary {
        color: ${colors.white};
        margin: 0
    }
    @media screen and (max-width: 768px) {
        width: 50vw;
        margin-right: 1.7vw;
    }
    @media screen and (max-width: 425px) {
        width: 80vw;
    }
`
const ArticleSummary = styled.div`
    font-size: 1.5rem;
    height: 150px;
    border-radius:30px;
    color: ${colors.primary};
    padding: 1rem;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: ${colors.white};
`
const ArticleAuthor = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    & .remark {
        color: ${colors.white};
    }
`

function Article ({title, content, author}) {
    return (
        <StyledArticleContainer>
            <h2>{title}</h2>
            <p className="articleContainer_summary">Aperçu:</p>
            <ArticleSummary>{content}</ArticleSummary> 
            <ArticleAuthor>
                <p className="remark">Auteur: {author}</p>
            </ArticleAuthor>
        </StyledArticleContainer>        
    )
};

export default Article;