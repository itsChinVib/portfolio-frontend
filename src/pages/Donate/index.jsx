import React from 'react';
import { Container, Box, Typography, Button, Tooltip } from '@material-ui/core';
import { useWindowSize } from 'react-use';

export const DonatePage = () => {
  const { width } = useWindowSize();
  let mobile = width < 480;
  return (
    <Container>
      <>
        <Box style={{ padding: 20 }}>
          <Box>
            <Typography
              variant="h3"
              style={{ textAlign: 'center', marginTop: '5%' }}
            >
              Tip or Donate
            </Typography>
            <Typography
              style={{ textAlign: 'center', marginTop: '5%', fontSize: 24 }}
            >
              Any amount of tip / donation is appreciated. (Hover to see amount
              in USD)
            </Typography>
          </Box>
          <Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: mobile ? 'column' : 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: '5%',
              }}
            >
              <Tooltip
                title={
                  <>
                    <Typography>approx USD 2.76</Typography>
                  </>
                }
                placement="right"
              >
                <a
                  href="https://buy.stripe.com/4gw4jxagm5WifCgeUU"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <Button
                    size="large"
                    variant="contained"
                    style={{ fontSize: 24, margin: 10, maxWidth: 200 }}
                  >
                    INR 214
                  </Button>
                </a>
              </Tooltip>
              <Tooltip
                title={
                  <>
                    <Typography>approx USD 6.44</Typography>
                  </>
                }
                placement="right"
              >
                <a
                  href="https://buy.stripe.com/28o8zNewC84q61G6oq"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <Button
                    size="large"
                    variant="contained"
                    style={{ fontSize: 24, margin: 10, maxWidth: 200 }}
                  >
                    INR 500
                  </Button>
                </a>
              </Tooltip>
              <Tooltip
                title={
                  <>
                    <Typography>approx USD 12.89</Typography>
                  </>
                }
                placement="right"
              >
                <a
                  href="https://buy.stripe.com/fZeaHVfAG70meyccMN"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <Button
                    size="large"
                    variant="contained"
                    style={{ fontSize: 24, margin: 10, maxWidth: 200 }}
                  >
                    INR 1000
                  </Button>
                </a>
              </Tooltip>
            </Box>
            <Typography style={{ textAlign: 'center', fontSize: 18 }}>
              Note that these donations are self voluntary. They are
              non-refundable under any circumstances.
            </Typography>
            <Typography style={{ textAlign: 'center', fontSize: 18 }}>
              You will be redirected to Stripe.com for completing the payment
            </Typography>
          </Box>
        </Box>
      </>
    </Container>
  );
};
