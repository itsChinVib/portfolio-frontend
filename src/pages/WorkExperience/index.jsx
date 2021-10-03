import React from 'react';
import { Container } from '@material-ui/core';
import _ from 'lodash';

import { freelanceProjects, internships } from 'common/data/experience-data';
import { InternshipItem } from 'components/Experience/Internship';
import { ExperienceTypeHeading } from 'components/Experience/TypeHeading';
import { FreeLanceProject } from 'components/Experience/FreelanceProjects';

export const WorkExperiencePage = () => {
  return (
    <Container>
      <>
        <ExperienceTypeHeading title={'Internships'} />
        {_.map(internships, ele => !ele.hide && <InternshipItem {...ele} />)}
      </>
      <>
        <ExperienceTypeHeading title={'Freelance Projects'} />
        {_.map(
          freelanceProjects,
          ele => !ele.hide && <FreeLanceProject {...ele} />
        )}
      </>
    </Container>
  );
};
