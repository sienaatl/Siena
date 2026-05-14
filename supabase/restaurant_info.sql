-- Run this in the Supabase SQL editor to create the restaurant_info table.
-- Replace 'YOUR_CLIENT_ID' with the value of NEXT_PUBLIC_CLIENT_ID from .env.local

CREATE TABLE IF NOT EXISTS restaurant_info (
  client_id  text PRIMARY KEY,
  address    text NOT NULL DEFAULT '124 Devore Rd, Alpharetta, GA 30009',
  phone      text NOT NULL DEFAULT '404-488-3399',
  maps_url   text NOT NULL DEFAULT 'https://maps.app.goo.gl/qAEv8rdegv8rYr1c8',
  hours      jsonb NOT NULL DEFAULT '[]'::jsonb,
  updated_at timestamptz DEFAULT now()
);

-- Insert initial data (update client_id to match your env var)
INSERT INTO restaurant_info (client_id, address, phone, maps_url, hours)
VALUES (
  'YOUR_CLIENT_ID',
  '124 Devore Rd, Alpharetta, GA 30009',
  '404-488-3399',
  'https://maps.app.goo.gl/qAEv8rdegv8rYr1c8',
  '[
    {"label": "Monday", "value": "Closed"},
    {"label": "Tuesday – Thursday", "value": "4:00 PM – 10:00 PM"},
    {"label": "Friday – Saturday", "value": "4:00 PM – 12:00 AM"},
    {"label": "Sunday", "value": "4:00 PM – 10:00 PM"}
  ]'::jsonb
) ON CONFLICT (client_id) DO NOTHING;
