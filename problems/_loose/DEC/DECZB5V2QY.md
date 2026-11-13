---
tag: DECZB5V2QY
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107672
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
28.2.11 ** Let $M$ be a set of $n$ points in the plane, satisfying:
(1) $M$ contains 7 points which are the 7 vertices of a convex heptagon;
(2) For any 5 points in $M$, if these 5 points are the 5 vertices of a convex pentagon, then this convex pentagon contains at least one point from $M$ inside it.
Find the minimum value of $n$.
