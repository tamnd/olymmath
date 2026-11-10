---
tag: MJV7FVR8YR
kind: problem
appearances:
  - at: tot/2017-fall/sa5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66344
    url: https://problems.ru/view_problem_details_new.php?id=66344
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    name: NuminaMath-1.5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A piece of cheese needs to be cut into parts while adhering to the following rules:

first, cut the cheese into two pieces, then cut one of them into two pieces, then cut one of the three pieces into two pieces again, and so on;

after each cut, the pieces can be of different weights, but the ratio of the weight of each piece to the weight of any other must be strictly greater than a given number $R$.

a) Prove that when $R=0.5$, the cheese can be cut in such a way that the process never stops (after any number of cuts, another piece can always be cut).

b) Prove that if $R>0.5$, the cutting process will eventually stop.

c) What is the maximum number of pieces the cheese can be cut into if $R=0.6$?
