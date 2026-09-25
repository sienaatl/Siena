const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const source = ts.transpileModule(fs.readFileSync('lib/hours.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const context = { exports: {} };
vm.runInNewContext(source, context);
const { FALLBACK_WEEKDAY_SCHEDULE: schedule, getTimeSlotsForDay, getWeekdaySchedule } = context.exports;

test('fallback calendar matches the published dinner schedule for all seven days', () => {
  assert.equal(schedule[1].closed, true);
  for (const day of [0, 2, 3, 4]) {
    const slots = getTimeSlotsForDay(schedule[day]);
    assert.equal(slots[0], '4:00 PM');
    assert.equal(slots.at(-1), '10:00 PM');
    assert.equal(slots.includes('11:00 PM'), false);
  }
  for (const day of [5, 6]) {
    const slots = getTimeSlotsForDay(schedule[day]);
    assert.equal(slots[0], '4:00 PM');
    assert.equal(slots.at(-1), '12:00 AM');
    assert.equal(slots.includes('11:00 PM'), true);
  }
});

test('API Monday-first numbering maps to JavaScript weekdays by name', () => {
  const mapped = getWeekdaySchedule([
    { day: 'Thursday', day_of_week: 3, closed: false, open_time: '16:00', close_time: '22:00', closes_next_day: false },
    { day: 'Saturday', day_of_week: 5, closed: false, open_time: '16:00', close_time: '00:00', closes_next_day: true },
  ]);
  assert.equal(mapped[4].closeTime, '22:00');
  assert.equal(mapped[6].closeTime, '00:00');
});
