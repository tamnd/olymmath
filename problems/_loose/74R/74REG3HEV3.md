---
tag: 74REG3HEV3
kind: problem
type: answer
answer: I = (m-1)n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242453
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ distinct points on a circumference. Choose one of the points. Connect this point and the $m$th point from the chosen point counterclockwise with a segment. Connect this $m$th point and the $m$th point from this $m$th point counterclockwise with a segment. Repeat such steps until no new segment is constructed. From the intersections of the segments, let the number of the intersections - which are in the circle - be $I$. Answer the following questions ($m$ and $n$ are positive integers that are relatively prime and they satisfy $6 \leq 2m < n$).

1) When the $n$ points take different positions, express the maximum value of $I$ in terms of $m$ and $n$.

2) Prove that $I \geq n$. Prove that there is a case, which is $I=n$, when $m=3$ and $n$ is arbitrary even number that satisfies the condition.
