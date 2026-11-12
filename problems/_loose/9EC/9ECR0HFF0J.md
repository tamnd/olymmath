---
tag: 9ECR0HFF0J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Argentina National Olympiad Level 2
    url: https://artofproblemsolving.com/community/c6h3467809
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29948
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2023
    source: hf-ai-mo-aops
    label: 2023 Argentina National Olympiad Level 2
---
There is a row of $n$ chairs, numbered in order from left to right from $1$ to $n$ . Additionally, the $n$ numbers from $1$ to $n$ are distributed on the backs of the chairs, one number per chair, such that the number on the back of a chair never matches the number of the chair itself. There is a child sitting on each chair.

Every time the teacher claps, each child checks the number on the back of the chair they are sitting on and moves to the chair corresponding to that number. Prove that for any $m$ that is not a power of a prime, with $1 < m \leqslant n$ , it is possible to distribute the numbers on the backrests such that, after the teacher claps $m$ times, for the first time, all the children are sitting in the chairs where they initially started.

(During the process, it may happen that some children return to their original chairs, but they do not all do so simultaneously until the $m^{\text{th}}$ clap.)
