import { styled } from "styled-components";
import { useState } from "react";
import { Modal } from "antd";

export interface ProjectBannerProps {
  $image: string;
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: rgba(204, 201, 201, 0.35) 0px 5px 5px;
  width: 95%;
  margin: 10px auto;
  position: relative;
  background: linear-gradient(135deg,rgb(30, 30, 29), transparent);
  padding: 20px;
  overflow: visible;
`;

export const ContentWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
`;

const PeepholeIcon = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, #111 40%, #000 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  border: 8px solid rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  overflow: visible;
  z-index: 5;
  box-shadow:
    inset 0 0 8px rgba(255, 255, 255, 0.05),
    0 0 15px rgba(0, 0, 0, 0.8);
`;

const PeepImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.5s ease;
  object-fit: cover;
  pointer-events: auto;
  z-index: 10;
  position: relative;
  box-shadow:
    0 0 0 6px rgba(0, 0, 0, 0.6),
    0 0 8px rgba(0, 0, 0, 0.4),
    inset 0 0 8px rgba(0, 0, 0, 0.6);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.5) 90%
    );
    pointer-events: none;
    transition: opacity 0.5s ease;
    z-index: 11;
  }

  &:hover {
    transform: scale(8);
    border-radius: 50%;
    z-index: 999;
    box-shadow:
      0 0 0 4px rgba(0, 0, 0, 0.5),
      0 0 10px rgba(0, 0, 0, 0.4),
      inset 0 0 15px rgba(0, 0, 0, 0.5);

    &::after {
      opacity: 0;
    }
  }
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: #1e1e1e;
    color: white;
    border-radius: 10px;
    text-align: center;
    padding: 20px;
  }

  .ant-modal-header {
    background-color: #1e1e1e;
    border-bottom: none;
  }

  .ant-modal-title {
    color: white;
    font-size: 25px;
  }

  .ant-modal-close-x {
    color: white;
  }
`;

const FullImage = styled.img`
  width: 80%;
  max-width: 600px;
  height: auto;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
`;

export const ProjectBanner = (props: ProjectBannerProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <StyledContainer>
        <ContentWrapper>
          <TitleWrapper>{props.children}</TitleWrapper>
          <PeepholeIcon>
            <PeepImage
              src={props.$image}
              alt="Full Preview"
              onClick={() => setModalVisible(true)}
            />
          </PeepholeIcon>
        </ContentWrapper>
      </StyledContainer>

      <StyledModal
        open={isModalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <FullImage src={props.$image} alt="Full Preview" />
      </StyledModal>
    </>
  );
};
