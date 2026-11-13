---
tag: QT6QPZF57Q
kind: problem
type: answer
answer: "363"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the city of Autolândia, car plate numbers are made up of three digits, ranging from plate 000 to plate 999. To reduce pollution, Mayor Pietro decided to implement a car rotation system, setting the days on which people can use their cars. The rules of the rotation are:

- Monday: only cars with odd-numbered plates;
- Tuesday: only cars with plates whose sum of the three digits is greater than or equal to 11;
- Wednesday: only cars with plates whose number is a multiple of 3;
- Thursday: only cars with plates whose sum of the three digits is less than or equal to 14;
- Friday: only cars with plates containing at least two identical digits;
- Saturday: only cars with a plate number strictly less than 500;
- Sunday: only cars with plates where all three digits are less than or equal to 5.

a) On which days can the car with the plate 729 circulate?

b) Maria, the mayor's wife, wants a car that can circulate every day except Sundays. What plate should she have?

c) Mayor Pietro needs a plate that allows him to circulate every day. What plate should he have?

d) Why can all residents of Autolândia circulate at least once a week?
