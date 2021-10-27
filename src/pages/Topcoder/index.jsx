import React from 'react';
import { Container } from '@material-ui/core';

import { ExperienceTypeHeading } from 'components/Experience/TypeHeading';
import { TopcoderItem } from 'components/Experience/TopcoderItem';
import { topcoderProjects, tcChType } from 'common/data/experience-data';
import _ from 'lodash';

export const TopcoderProfilePage = () => {
  return (
    <Container>
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
    </Container>
  );
};
