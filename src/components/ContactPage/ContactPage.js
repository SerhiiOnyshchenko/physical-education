import React from 'react';
import './ContactPage.css';
import Container from './../Container/Container';

export default function ContactPage() {
  return (
    <div className="ContactPage">
      <Container>
        <h2 className="ContactPage__title">Контактна інформація</h2>
        <div className="ContactPage__container">
          <div className="ContactPage__left">
            <div className="ContactPage__address-ua">
              <h3 className="ContactPage__title">
                КИЇВСЬКИЙ МІСЬКИЙ МЕДИЧНИЙ ФАХОВИЙ КОЛЕДЖ
              </h3>
              <div className="ContactPage__text">
                <p>Адреса коледжу: 02660 Київ, вул. Братиславська, 5</p>
                <p>
                  <a href="tel:+380445187668">
                    тел.: <strong>(044) 518-7668</strong>{' '}
                  </a>
                </p>
                <p>
                  <a href="mailto:kmmk303@ukr.net">
                    E-mail: <strong>kmmk303@ukr.net</strong>{' '}
                  </a>
                </p>
                <p>Телефон «гарячої лінії» МОЗ України: 0-800-801-333</p>
              </div>
            </div>
            <div className="ContactPage__address-en">
              <h3 className="ContactPage__title">KIEV MEDICAL COLEGE</h3>
              <div className="ContactPage__text">
                <p>Address: 5 Bratislavska str. Kiev, 02660</p>
                <p>
                  <a href="tel:+380445184215">
                    тел.: <strong>(044) 518-4215</strong> (Foreign Students
                    Department)
                  </a>
                </p>
                <p>
                  <a href="tel:+380445187668">
                    тел.: <strong>(044) 518-7668</strong> (Reception)
                  </a>
                </p>
                <p>
                  <a href="mailto:kmmk303@ukr.net">
                    E-mail: <strong>kmmk303@ukr.net</strong>{' '}
                  </a>
                </p>
                <p>Ownership: A State-owned School</p>
              </div>
            </div>
          </div>
          <div className="ContactPage__right">
            <h3 className="ContactPage__title">ЯК ДОБРАТИСЯ</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5078.34632379552!2d30.61470424600219!3d50.47511996785701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9aeb713f634af04f!2sKyyivs%CA%B9kyy%20Mis%CA%B9kyy%20Medychnyy%20Koledzh!5e0!3m2!1sen!2sua!4v1666336416393!5m2!1sen!2sua"
              width="100%"
              height="450"
              style={{ border: 0, background: '#f1f3f4' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
}
