import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export const ProductItemSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <p>
        <Skeleton count={13} />
        skeleton
      </p>
    </SkeletonTheme>
  );
};