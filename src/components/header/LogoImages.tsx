import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { useAppSelector } from '../../hooks/reduxHooks'

const LogoImages = (): JSX.Element => {
  const searchGamesStore = useAppSelector((state) => state.searchGames.items)
  return (
    <Box sx={{
      overflow: 'hidden',
      position: 'absolute',
      width: '100%',
      height: { xs: '10%', xl: '7%' },
      left: 0,
      top: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }}
    >
      <Box
        sx={{
          overflowY: 'hidden',
          overflowX: 'hidden',
          transform: 'rotate(-3deg)',
          marginTop: '-10%'
        }}
      >
        <ImageList variant="masonry" cols={6} gap={0}>
          {searchGamesStore.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.background_image}?w=248&fit=crop&auto=format`}
                srcSet={`${item.background_image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
                style={{
                  opacity: '0.3',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  )
}

export default LogoImages
