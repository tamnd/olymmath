---
tag: HKBKXD7VEM
kind: problem
type: answer
answer: 365+\frac{97}{407}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Gregorian calendar. An ordinary year contains 365 days, a leap year - 366. The $n$-th year, the number of which is not divisible by 100, is a leap year if and only if $n$ is divisible by 4. The $n$-th year, where $n$ is divisible by 100, is a leap year if and only if $n$ is divisible by 400. For example, the years 1996 and 2000 are leap years, while 1997 and 1900 are not. These rules were established by Pope Gregory XIII.

So far, we have been referring to the "civil year," the number of days of which must be an integer. An astronomical year, however, is the period of time during which the Earth completes one full orbit around the Sun. Assuming that the "Gregorian year" is fully aligned with the astronomical year, find the duration of the astronomical year.
