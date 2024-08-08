import {
  Box,
  Center,
  Container,
  Heading,
  Wrap,
  WrapItem,
  Text,
  Link,
  keyframes,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
const hoverStyle = {
  background: 'blackAlpha.300',
  boxShadow: 'dark-lg',
  transition: 'all 0.3s ease',
};

const animation = keyframes`
  from {
    transform:translateX(0px);
  }
  to {
    transform:translateX(4px);
  }
`;

const JobExperienceBox = ({ title, description, skills }) => {
  const [isHovered, setIsHovered] = useState(false);
  const pillBgColor = useColorModeValue('teal.400', 'rgba(45,212,191,.1)');
  const pillTextColor = useColorModeValue('rgb(255, 255, 255)', 'brightTeal');
  const titleColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900');
  const titleColorOnHover = useColorModeValue('teal.400', 'brightTeal');
  return (
    <Box
      p="5"
      borderRadius="5px"
      _hover={hoverStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Heading size="md" color={isHovered ? titleColorOnHover : titleColor}>
        {title}
      </Heading>
      <Text pb={1}>{description}</Text>
      <Wrap spacing="5px" pt={1}>
        {skills.map(skill => (
          <WrapItem key={skill}>
            <Center
              px={4}
              borderRadius="30px"
              h="28px"
              bg={pillBgColor}
              color={pillTextColor}
            >
              {skill}
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

const WorkExperience = () => {
  const viewResumeColor = useColorModeValue('#ff007f', 'brightTeal');
  const [isHovered, setIsHovered] = useState(false);
  const arrowAnimation = `${animation} infinite 0.5s`;
  return (
    <Container id="works" maxW="container.md">
      <Heading mb={4} size="4xl">
        Where I&apos;ve Worked at
      </Heading>

      <JobExperienceBox
        title="Senior Frontend Developer - Citi Bank"
        description="Partnered with product development teams to strategize and implement enhancements, solutions, and innovative features, all aimed at elevating safety standards and reliability within the aviation industry. Undertook comprehensive responsibility and ownership for the entire cycle of UI mockups and API integration, spanning from initial development and rigorous testing, through to production deployment, followed by ongoing improvements and troubleshooting."
        skills={['Angular 14-16', 'HTML', 'SCSS', 'TypeScript', 'RxJs', 'NgRx','Agile','Git']}
      />

      <JobExperienceBox
        title="Senior Frontend Developer - VeryOn"
        description="Partnered with product development teams to strategize and implement enhancements, solutions, and innovative features, all aimed at elevating safety standards and reliability within the aviation industry. Undertook comprehensive responsibility and ownership for the entire cycle of UI mockups and API integration, spanning from initial development and rigorous testing, through to production deployment, followed by ongoing improvements and troubleshooting."
        skills={['Angular 12+', 'HTML', 'SCSS', 'TypeScript', 'RxJs', 'NgRx', 'C#','MVC','SQL']}
      />

      <JobExperienceBox
        title="Senior Frontend Developer - RBC Bank"
        description="Designed and implemented reusable and custom UI components leveraging the power of PrimeNG and RBC's component library, strategically enhancing code quality and streamlining the development process for increased efficiency.."
        skills={['Angular 10+', 'HTML', 'Sass', 'NPM', 'TypeScript', 'RxJs', 'NGXS','Unit Testing','Jira']}
      />

      <JobExperienceBox
        title="Senior Frontend Developer - CIBC Bank"
        description="Collaborated with the UI team to meticulously engineer and enhance significant features of CIBC's customer-centric application, thereby elevating the user experience"
        skills={['Vue.js', 'Ember', 'Vuex', 'Javascript','Cypress','HTML','Tailwind Css']}
      />
      <JobExperienceBox
        title="Senior Frontend Developer - Home Depot"
        description="Worked together the dev team to develop a feature which aggregates comprehensive article information, a page intended to assist retail stores in enhancing customer service, order fulfillment, and product sales"
        skills={['Angular 10','React.js', 'HTML', 'SCSS', 'TypeScript', 'RxJs', 'NgRx', 'Accessibity']}
      />
      <JobExperienceBox
        title="Software Engineer - TD Bank"
        description="Collaborated with fellow engineers to design a streamlined online
            credit card application system, with an aim to expedite and simplify
            the application processing experience."
        skills={['Angular 6', 'TypeScript', 'SCSS', 'Java', 'Spring MVC','Spring Framework','Spring Boot','Jsp','Jspf','WCAG','AODA']}
      />

      <Box ml={4} my={10}>
        <Link
          href="/resume.pdf"
          fontWeight={600}
          color={viewResumeColor}
          textDecorationColor="brightTeal"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          isExternal
        >
          View Full Résumé
          <ArrowForwardIcon
            animation={isHovered ? arrowAnimation : 'none'}
            mx="2px"
          />
        </Link>
      </Box>
    </Container>
  );
};

export default WorkExperience;
