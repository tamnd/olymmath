---
tag: 51YH96GSJG
kind: problem
type: answer
answer: \left\lfloor \frac{n+1}{4} \right\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Nikees has a set $S$ of $n$ points on a plane and decides to colour them. All $\dbinom{n}{2}$ line segments are drawn and they have distinct lengths. Find the maximum number of colours that are used at least once, given that:

(a) For each point $P$, the two endpoints of the longest line segment connecting $P$ must be of the same colour.

(b) For each point $P$, the two endpoints of the shortest line segment connecting $P$ must be of the same colour.
