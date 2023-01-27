import React from 'react';
import { Container } from '@material-ui/core';
import _ from 'lodash';

import {
  academicProjects,
  freelanceProjects,
  internships,
  personalProjects,
  tcChType,
  topcoderProjects,
} from 'common/data/experience-data';
import { InternshipItem } from 'components/Experience/Internship';
import { ExperienceTypeHeading } from 'components/Experience/TypeHeading';
import { FreeLanceProject } from 'components/Experience/FreelanceProjects';
import { TabbedExperienceLayout } from 'components/Experience/TabbedExperienceLayout';
import { TopcoderItem } from 'components/Experience/TopcoderItem';
import { ProjectItem } from 'components/Experience/Projects';

export const TabbedWorkExperiencePage = () => {
  const WorkExpContent = (
    <>
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
    </>
  );

  const TopcoderContent = (
    <>
      <>
        <ExperienceTypeHeading title={'Topcoder Development Track'} />
        {_.map(
          _.filter(topcoderProjects, { type: tcChType.dev }),
          ele => !ele.hide && <TopcoderItem {...ele} />
        )}
      </>
      {/* 
        <>
          <ExperienceTypeHeading title={'Topcoder Data Science Track'} />
        </> 
      */}
      <>
        <ExperienceTypeHeading title={'Topcoder First 2 Finish Track'} />
        {_.map(
          _.filter(topcoderProjects, { type: tcChType.f2f }),
          ele => !ele.hide && <TopcoderItem {...ele} />
        )}
      </>
    </>
  );

  const ProjectContent = (
    <>
      <>
        <ExperienceTypeHeading title={'Academic Projects'} />
        {_.map(academicProjects, ele => !ele.hide && <ProjectItem {...ele} />)}
      </>
      <>
        <ExperienceTypeHeading title={'Personal Projects'} />
        {_.map(personalProjects, ele => !ele.hide && <ProjectItem {...ele} />)}
      </>
    </>
  );

  const tabData = [
    { label: 'Work Experience', content: WorkExpContent },
    { label: 'Topcoder ', content: TopcoderContent },
    { label: 'Projects', content: ProjectContent },
  ];

  return (
    <Container>
      <TabbedExperienceLayout data={tabData} />
    </Container>
  );
};
