"use client";

import { useState } from "react";

const celebrations = [
  {
    day: "WEDNESDAY",
    date: "2 December 2026",
    venue: "Seeta Dayanand Pai Kalyana Mantapa, Hiremagluru, Chikkamagaluru",
    events: [
      ["8:00 AM – 10:00 AM", "HALDI", "A celebration with family and friends."],
      ["7:30 PM onwards", "SANGEET", "An evening of music and dancing."],
    ],
  },
  {
    day: "THURSDAY",
    date: "3 December 2026",
    venue: "Seeta Dayanand Pai Kalyana Mantapa, Hiremagluru, Chikkamagaluru",
    events: [["8:00 AM – 9:00 AM", "WEDDING CEREMONY", "Join us as we begin our life together."]],
  },
];

const calendarDays = [null, ...Array.from({ length: 31 }, (_, index) => index + 1)];

function CalendarLink({ dates, title, location }: { dates: string; title: string; location: string }) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates,
    details: "With love and blessings, Anoop & Srushti",
    location,
  });
  return (
    <a
      className='text-link'
      href={`https://calendar.google.com/calendar/render?${params.toString()}`}
      target='_blank'
      rel='noreferrer'
    >
      ADD TO CALENDAR <span aria-hidden='true'>↗</span>
    </a>
  );
}

export function WeddingInvitation() {
  const [opened, setOpened] = useState(false);

  return (
    <main className='site-shell'>
      <div className='invitation-column'>
        <section className='hero' aria-label='Anoop and Srushti wedding invitation'>
          <div className='hero-image' role='img' aria-label='A bride and groom dancing in a golden spotlight' />
          <div className='hero-frame' />
          <div className='hero-copy'>
            <p className='eyebrow'>TOGETHER WITH THEIR FAMILIES</p>
            <h1>
              <span>ANOOP</span>
              <i>&amp;</i>
              <span>SRUSHTI</span>
            </h1>
            <p className='hero-invite'>
              request the pleasure of your company
              <br />
              as they begin their forever
            </p>
            <div className='ornament'>
              <span />◆<span />
            </div>
            <p className='hero-date'>3 · DECEMBER · 2026</p>
            <p className='hero-place'>Hiremagluru, Chikkamagaluru</p>
          </div>
          <a className='scroll-cue' href='#welcome'>
            SCROLL <span />
          </a>
          <button
            className={`open-invitation ${opened ? "is-open" : ""}`}
            type='button'
            onClick={() => setOpened(true)}
            aria-expanded={opened}
          >
            <span className='open-kicker'>YOU ARE INVITED</span>
            <span className='open-names'>
              ANOOP <i>&amp;</i> SRUSHTI
            </span>
            <span className='open-action'>{opened ? "WELCOME" : "TAP TO OPEN"}</span>
          </button>
        </section>

        {/* <a className='rsvp-button' href='mailto:hello@example.com?subject=Wedding%20RSVP%20%E2%80%94%20Anoop%20%26%20Srushti'>
          REPLY TO THE INVITATION
        </a> */}

        <section className='note-section paper-section' id='welcome' aria-labelledby='welcome-title'>
          <p className='eyebrow'>A NOTE FROM THE COUPLE</p>
          <h2 id='welcome-title'>
            DEAR FAMILY
            <br />
            &amp; FRIENDS
          </h2>
          <div className='ornament dark-ornament'>
            <span />✳<span />
          </div>
          <p>With the blessings of our elders, we are beginning a new chapter of our lives together.</p>
          <p>
            Please join us on 2 December for our haldi and sangeet, and on 3 December for our wedding ceremony in Hiremagluru,
            Chikkamagaluru.
          </p>
          <p className='signature'>ANOOP &amp; SRUSHTI</p>
        </section>

        <section className='save-date-section' aria-labelledby='save-date-title'>
          <p className='eyebrow'>ONE PLACE, TWO DAYS</p>
          <h2 className='section-title' id='save-date-title'>
            SAVE THE DATE
          </h2>
          <p className='section-subtitle'>Turn the pages to our days</p>
          <div className='calendar-card' role='group' aria-label='December 2026 calendar with the 2nd and 3rd marked'>
            <div className='calendar-heading'>
              <span>DECEMBER</span>
              <span>2026</span>
            </div>
            <div className='calendar-grid calendar-weekdays'>
              {"MTWTFSS".split("").map((day, index) => (
                <span key={`${day}-${index}`}>{day}</span>
              ))}
            </div>
            <div className='calendar-grid calendar-days'>
              {calendarDays.map((day, index) => (
                <span
                  className={day === 2 || day === 3 ? "marked-day" : day === null ? "empty-day" : ""}
                  key={day ?? `empty-${index}`}
                >
                  {day}
                </span>
              ))}
            </div>
            <div className='calendar-key'>
              <span>
                <i className='dot dot-one' />2 Dec · Haldi &amp; Sangeet
              </span>
              <span>
                <i className='dot dot-two' />3 Dec · Wedding
              </span>
            </div>
          </div>
          <div className='countdown-note'>
            <span>✦</span> Two days of celebration <span>✦</span>
          </div>
          <div className='calendar-links'>
            <CalendarLink
              dates='20261202/20261203'
              title='Anoop & Srushti — Haldi & Sangeet'
              location='Seeta Dayanand Pai Kalyana Mantapa, Hiremagluru, Chikkamagaluru'
            />
            <CalendarLink
              dates='20261203T080000/20261203T090000'
              title='Anoop & Srushti — Wedding Ceremony'
              location='Seeta Dayanand Pai Kalyana Mantapa, Hiremagluru, Chikkamagaluru'
            />
          </div>
        </section>

        <section className='programme-section paper-section' aria-labelledby='programme-title'>
          <p className='eyebrow'>THE DAYS WE’LL REMEMBER</p>
          <h2 className='section-title' id='programme-title'>
            THE CELEBRATIONS
          </h2>
          <p className='section-subtitle'>How the days will unfold</p>
          <div className='days-list'>
            {celebrations.map((day) => (
              <article className='day-card' key={day.date}>
                <div className='day-heading'>
                  <span className='day-name'>{day.day}</span>
                  <h3>{day.date}</h3>
                  <p>{day.venue}</p>
                </div>
                <div className='event-list'>
                  {day.events.map(([time, title, description]) => (
                    <div className='event-row' key={title}>
                      <time>{time}</time>
                      <div>
                        <h4>{title}</h4>
                        <p>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className='reception-section' aria-label='Wedding ceremony'>
          <p className='eyebrow'>THE WEDDING DAY</p>
          <div className='reception-rule'>
            <span>✦</span>
          </div>
          <h2>
            THE WEDDING
            <br />
            CEREMONY
          </h2>
          <p className='reception-date'>Thursday, 3 December 2026</p>
          <p>8:00 AM – 9:00 AM</p>
          {/* <p className='reception-venue'>
            Seeta Dayanand Pai Kalyana Mantapa
            <br />
            Hiremagluru, Chikkamagaluru
          </p>
          <a
            className='text-link'
            href='https://maps.google.com/?q=Seeta+Dayanand+Pai+Kalyana+Mantapa+Hiremagluru+Chikkamagaluru'
            target='_blank'
            rel='noreferrer'
          >
            GET DIRECTIONS <span aria-hidden='true'>↗</span>
          </a> */}
        </section>

        <section className='venues-section paper-section' aria-labelledby='venues-title'>
          <p className='eyebrow'>COME CELEBRATE WITH US</p>
          <h2 className='section-title' id='venues-title'>
            WHERE
          </h2>
          <figure className='venue-art'>
            <img src='/garden-mandap.png' alt='An illustrated wedding mandap at dusk with candlelit tables' />
            <figcaption>OUR WEDDING VENUE</figcaption>
          </figure>
          <div className='venue-card'>
            <p className='eyebrow'>2 &amp; 3 DECEMBER · 2026</p>
            <h3>
              SEETA DAYANAND PAI
              <br />
              KALYANA MANTAPA
            </h3>
            <p>Hiremagluru, Chikkamagaluru</p>
            <a
              className='text-link'
              href='https://maps.google.com/?q=Seeta+Dayanand+Pai+Kalyana+Mantapa+Hiremagluru+Chikkamagaluru'
              target='_blank'
              rel='noreferrer'
            >
              GET DIRECTIONS <span aria-hidden='true'>↗</span>
            </a>
          </div>
        </section>

        <footer className='footer-section'>
          <p className='eyebrow'>WITH LOVE AND BLESSINGS</p>
          <p className='footer-names'>
            ANOOP <i>&amp;</i> SRUSHTI
          </p>
          <p>Our families look forward to celebrating with you.</p>
          {/* <a className='footer-link' href='mailto:hello@example.com?subject=Wedding%20RSVP%20%E2%80%94%20Anoop%20%26%20Srushti'>
            KINDLY REPLY <span aria-hidden='true'>↗</span>
          </a> */}
        </footer>
      </div>
    </main>
  );
}
