import * as all from '../utils/utils'

it('Returns correct year', () => {
  expect(all.getFullYear()).toBe(2024)
})

it('Returns correct correct string when passed argument', () => {
  expect(all.getFooterCopy(true)).toBe("Holberton School");
  expect(all.getFooterCopy(false)).toBe("Holberton School main dashboard");
})

it('Returns correct string', () => {
  expect(all.getLatestNotification()).toBe( "<strong>Urgent requirement</strong> - complete by EOD")
})