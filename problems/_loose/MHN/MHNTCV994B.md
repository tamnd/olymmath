---
tag: MHNTCV994B
kind: problem
type: answer
answer: \frac{1}{\sqrt{}}\geqslant\frac{1}{\sqrt{R}}+\frac{1}{\sqrt{r}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Convex quadrilateral $ABCD$ has the property: (1) $AB=AD+BC$, (2) There is a point $P$ inside it, the distance from point $P$ to $CD$ is $h$, and it makes $AP=h+AD, BP=h+BC$, prove: $\frac{1}{\sqrt{h}} \geqslant \frac{1}{\sqrt{AD}}+\frac{1}{\sqrt{BC}}$. Three tangent lines, $P, Q, R$ are the points of tangency, try to prove:
(1) When $l$ is tangent to circle $O$, $AB \cdot CR + BC \cdot AP = AC \cdot BQ$;
(2) When $l$ intersects circle $O$, $AB \cdot CR + BC \cdot AP = AC \cdot BQ$.
