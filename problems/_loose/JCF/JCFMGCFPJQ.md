---
tag: JCFMGCFPJQ
kind: problem
type: answer
answer: (1,4),(2,3),(2,4),(3,4),(4,5)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162805
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Krt Črt has 5 rooms in his burrow, numbered from 1 to 5. Between some of them, Črt has dug tunnels, so from each room he can slide through several tunnels to any other room. No two tunnels intersect. Each tunnel starts in one room, ends in another (different from the starting one), and does not pass through any room in between. Rooms that a tunnel directly connects are called adjacent. List the pairs of adjacent rooms if the following conditions are met:

- if Črt slides through exactly three (not necessarily distinct) tunnels, he cannot get from room 5 to room 1 or 5;
- if Črt slides through exactly two tunnels, he can get from room 5 to room 2 and 3;
- if Črt slides through exactly three (not necessarily distinct) tunnels, he can get from room 3 to room 1.
