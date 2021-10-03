import React from 'react';
import { Container } from '@material-ui/core';
import _ from 'lodash';

import {
  academicProjects,
  personalProjects,
} from 'common/data/experience-data';
import { ExperienceTypeHeading } from 'components/Experience/TypeHeading';
import { ProjectItem } from 'components/Experience/Projects';

export const ProjectsPage = () => {
  return (
    <Container>
      <>
        <ExperienceTypeHeading title={'Academic Projects'} />
        {_.map(academicProjects, ele => !ele.hide && <ProjectItem {...ele} />)}
      </>
      <>
        <ExperienceTypeHeading title={'Personal Projects'} />
        {_.map(personalProjects, ele => !ele.hide && <ProjectItem {...ele} />)}
      </>
    </Container>
  );
};
