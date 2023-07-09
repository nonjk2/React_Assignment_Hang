import { forwardRef, useCallback } from "react";
import { ImageData } from "../../types/post";
import { v4 as uuidv4 } from "uuid";
import { ItemWrraper, PostDogsItemContainer } from "../main/DogListItemStyle";
import styled from "styled-components";
import Button from "../../util/button";
import { InfiniteData, useMutation } from "react-query";
import { PostDos } from "../../api/Dogs";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { fetchMyDog } from "../../store/slice/dogsSlice";

export const Paper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.13);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.1);
  border-radius: 15px;
  transition: transform 0.3s;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
`;

export const PaperContainer = styled.div`
  position: sticky;
  perspective: 1000px;
  width: 100%;
  height: 40vh;
  &:hover,
  &:focus {
    & .paper {
      z-index: 100;
      .PostButtonBox {
        background-color: rgba(0, 0, 0, 0.5);
        display: block;
        height: 100%;
      }
    }
  }
`;
interface FrontAboutMeOneProps {
  isHasDogs: boolean;
}
export const FrontAboutMeOne = styled.div<FrontAboutMeOneProps>`
  display: flex;
  align-content: center;
  justify-content: center;
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #000;
  border-radius: 10px;
  img {
    border-radius: 10px;
    object-fit: contain;
  }
  .isHasdogs {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
  }
`;

export const FrontAboutMeTwo = styled.div`
  backface-visibility: hidden;
  border-radius: 15px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  transform: rotateY(180deg);
`;

const PostButtonBox = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 0%;
  overflow: hidden;
  border-radius: 10px;
  transition: height 1s;
  display: none;

  .postform {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
interface DogListItemProps {
  data: InfiniteData<ImageData[]>;
  pagedata: ImageData;
  isFetching: boolean;
}

const DogPostListItem = forwardRef<HTMLDivElement, DogListItemProps>((props, ref) => {
  const { pagedata, isFetching } = props;
  const userDogs = useAppSelector((state) => state.dogs.posts);
  const user = useAppSelector((state) => state.user.id);
  const userDogsId = userDogs.map((e) => e.image.id);
  const IsHasDogs = userDogsId.some((d) => d === pagedata.id);
  const dispatch = useAppDispatch();
  const postMutation = useMutation(PostDos, {
    onSuccess: () => {
      console.log("성공");
      console.log(userDogs);
      dispatch(fetchMyDog(user));
    },
  });

  const onPostHandelr = useCallback(() => {
    postMutation.mutate({
      author: user,
      comments: [],
      description: "",
      id: uuidv4(),
      image: pagedata,
      title: "",
      like: 0,
    });
  }, []);

  const content = (
    <PostDogsItemContainer key={pagedata.id}>
      <PaperContainer>
        <Paper className="paper">
          <FrontAboutMeOne isHasDogs={IsHasDogs}>
            <img src={pagedata.url} loading="lazy" alt="" className="myDogImage" />
            {IsHasDogs && <div className="isHasdogs">이미 데리고 있는 강아지입니다</div>}
            <PostButtonBox className="PostButtonBox">
              {!isFetching ? (
                <>
                  <Button
                    color="green"
                    size="small"
                    title={<>데려가기😃</>}
                    onClick={onPostHandelr}
                  />
                </>
              ) : (
                <div>데려오는중입니다😃</div>
              )}
            </PostButtonBox>
          </FrontAboutMeOne>
        </Paper>
      </PaperContainer>
    </PostDogsItemContainer>
  );

  const lastItem = ref ? (
    <ItemWrraper ref={ref}>{content}</ItemWrraper>
  ) : (
    <ItemWrraper>{content}</ItemWrraper>
  );

  return lastItem;
});

export default DogPostListItem;
