"use strict";

export function problem(lines) {
  const time = lines[0];
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  console.log(`${hours}:${minutes}:${seconds}`);
}
