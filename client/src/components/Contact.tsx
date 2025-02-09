import { PageContainer, TwoColumnLayout, RightColumn } from "../styledComponents/components/Layout/StyledLayout"
import { MeImage} from "../styledComponents/Images";
import ContactForm from "./ContactForm";



export const Contact = () => {

    return (
      <>
        <PageContainer>
          <TwoColumnLayout>
            <RightColumn>
                <MeImage src="/images/russin.jpg" />
            </RightColumn>
            <RightColumn>
              <ContactForm />
            </RightColumn>
          </TwoColumnLayout>
        </PageContainer>
      </>
    );
}