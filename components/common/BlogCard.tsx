// react
import * as React from 'react';
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardProps,
  CardActions,
  CardActionsProps,
  Typography,
  styled,
} from '@mui/material';
import ImageWithSkeleton from 'components/common/ImageWithSkeleton';
import ButtonLink from 'components/common/ButtonLink';
// type
interface BlogCardProps extends CardProps {
  href?: string;
  readTime?: number;
  imageAlt?: string;
  imageSrc?: string;
  title?: string;
}

const CustomCardContent = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: '4px',
  height: '21rem',
  margin: '1rem 1rem 0',
  overflow: 'hidden',
  position: 'relative',
  width: '21rem',
  img: {
    transform: 'scale(1)',
    transition: 'transform 0.5s ease-in-out',
  },
  '&: hover': {
    img: {
      transform: 'scale(1.2)',
      transition: 'transform 0.5s ease-in-out',
    },
  },
}));

const CardTitleWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderRadius: theme.shape.borderRadius,
  bottom: 0,
  maxHeight: '30%',
  overflow: 'hidden',
  padding: '0.5rem',
  position: 'absolute',
  width: '100%',
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem',
  })
);

const BlogCard: React.FunctionComponent<BlogCardProps> = (props) => {
  const {
    children,
    href = '#',
    readTime = 12,
    imageAlt = '',
    imageSrc = '/',
    title = 'No Title ',
    ...otherProps
  } = props;

  return (
    <Card {...otherProps}>
      <CustomCardContent>
        <ImageWithSkeleton
          alt={imageAlt}
          src={imageSrc}
          layout="fill"
          objectFit="cover"
        />
        <CardTitleWrapper>
          <Typography component="h2" variant="h4" color="text.secondary">
            {title}
          </Typography>
        </CardTitleWrapper>
      </CustomCardContent>
      <CustomCardActions>
        <Typography
          color="text.secondary"
          component="p"
          fontSize="small"
          variant="body1"
        >
          {readTime} min read
        </Typography>
        <Box>
          <ButtonLink
            href={href}
            sx={{
              span: {
                marginLeft: '0.2rem',
                fontSize: '1.25rem',
                transition: 'all 0.25s ease-in-out',
              },
              ':hover': {
                span: {
                  transition: 'all 0.25s ease-in-out',
                  marginLeft: '0.5rem',
                },
              },
            }}
          >
            read more <Box component="span">&#8594;</Box>
          </ButtonLink>
        </Box>
      </CustomCardActions>
    </Card>
  );
};

export default BlogCard;
