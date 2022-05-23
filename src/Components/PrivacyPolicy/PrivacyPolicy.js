import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './PrivacyPolicy.css';
export default function PrivacyPolicy() {
  return (
    <section className="terms-service-container my-5">
      <h2   className="privacy-policy-title">Privacy Policy</h2>
      <Container className='fs-5 text-muted'>
        <Row>
          <h2  className="text-dark my-3 "  >What information do we collect?</h2>
          <p>
            We gather data from you when you register on our site, submit a
            request, buy any services, react to an overview, or round out a
            structure. At the point when requesting any assistance or enrolling
            on our site, as suitable, you might be approached to enter your:
            name, email address, or telephone number. You may, nonetheless,
            visit our site anonymously.
          </p>
        </Row>
        <Row>
          <h2  className="text-dark my-3 "  >How do we protect your information?</h2>
          <p>
            All provided delicate/credit data is sent through Stripe. After an
            exchange, your private data (credit cards, social security numbers,
            financials, and so on) won't be put away on our workers.
          </p>
        </Row>
        <Row>
          <h2  className="text-dark my-3 "  >Do we disclose any information to outside parties?</h2>
          <p>
            We don't sell, exchange, or in any case move to outside gatherings
            by and by recognizable data. This does exclude confided in outsiders
            who help us in working our site, leading our business, or adjusting
            you, since those gatherings consent to keep this data private. We
            may likewise deliver your data when we accept discharge is suitable
            to follow the law, implement our site strategies, or ensure our own
            or others' rights, property, or wellbeing.
          </p>
        </Row>
        <Row>
          <h2  className="text-dark my-3 "  >Children's Online Privacy Protection Act Compliance</h2>
          <p>
            We are consistent with the prerequisites of COPPA (Children's Online
            Privacy Protection Act), we don't gather any data from anybody under
            13 years old. Our site, items, and administrations are completely
            coordinated to individuals who are in any event 13 years of age or
            more established.
          </p>
        </Row>
        <Row>
          <h2  className="text-dark my-3 "  >Changes to our Privacy Policy</h2>
          <p>
            If we decide to change our privacy policy, we will post those
            changes on this page.
          </p>
        </Row>
        <Row>
          <h2  className="text-dark my-3 "  >How long we retain your information?</h2>
          <p>
            At the point when you register for our site, we cycle and keep your
            information we have about you however long you don't erase the
            record or withdraw yourself (subject to laws and guidelines).
          </p>
        </Row>
        <Row>
          <h2  className="text-dark my-3 "  >What we don’t do with your data</h2>
          <p>
            We don't and will never share, unveil, sell, or in any case give
            your information to different organizations for the promoting of
            their items or administrations.
          </p>
        </Row>
      </Container>
    </section>
  );
}
