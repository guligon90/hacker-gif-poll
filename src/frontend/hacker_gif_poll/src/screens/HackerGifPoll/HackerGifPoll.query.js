import graphql from 'babel-plugin-relay/macro';

export default graphql`
  query HackerGifPollQuery {
    hacker_gifs {
      weburl
      next
      results {
        id
        created
        shares
        itemurl
        composite
        hasaudio
        title
        media {
          gif_format
          dims
          duration
          preview
          size
        }
      }
    }
  }
`;
