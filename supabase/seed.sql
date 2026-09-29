-- Optional: loads the events the site shows, so the
-- Events page isn't empty on day one. Run once, after the migration.
-- Delete or edit them from the admin dashboard afterwards.

insert into public.events
  (title, category, status, event_date, description, details, highlights_title, highlights_items, capacity, form_fields)
values
  ('Hacktober Fest', 'Workshops', 'upcoming', '2026-10-10',
   'To conduct Hacktober Fest',
   'To conduct Hacktober Fest',
   null,
   '{}',
   null,
   '[]'::jsonb),

  ('Pull to Commit', 'Workshops', 'upcoming', '2026-09-24',
   'Block Chain workshop',
   'Block Chain workshop',
   null,
   '{}',
   null,
   '[]'::jsonb),

  ('Web Development Bootcamp', 'Seminars', 'past', '2023-12-10',
   'Intensive 3-day bootcamp covering HTML, CSS, JavaScript, and React.',
   'Intensive 3-day bootcamp covering HTML, CSS, JavaScript, and React.',
   null,
   '{}',
   null,
   '[]'::jsonb),

  ('Winter Code Hackathon', 'Competitions', 'past', '2023-12-01',
   '24-hour coding marathon with innovative campus solutions.',
   '24-hour coding marathon with innovative campus solutions.',
   null,
   '{}',
   null,
   '[]'::jsonb);
