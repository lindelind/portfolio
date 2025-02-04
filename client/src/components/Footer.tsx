import { LeftColumn, RightColumn } from "../styledComponents/components/Layout/StyledLayout";
import { PrimaryButton } from "../styledComponents/Button";
import { TwoColumnLayout } from "../styledComponents/components/Layout/StyledLayout";

export const Footer = () => {
  return (
    <>
      <TwoColumnLayout>
        <LeftColumn>
          <PrimaryButton>
            <a href={"mailto:ost.alinde@gmail.com"}>Github</a>
          </PrimaryButton>
          <PrimaryButton>
            <a href={"mailto:ost.alinde@gmail.com"}>LinkedIn</a>
          </PrimaryButton>
          <PrimaryButton>
            <a href={"mailto:ost.alinde@gmail.com"}>Email</a>
          </PrimaryButton>
        </LeftColumn>
        <RightColumn>
           <p>
              Alinde Öst <br />
              Kungsgatan 35, 70224 Örebro <br />
              0735-172595
            </p>
            <p>&copy; 2025</p>
        </RightColumn>
      </TwoColumnLayout>
    </>
  );
};
