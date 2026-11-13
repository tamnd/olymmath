---
tag: TTZE98S7FJ
kind: problem
type: answer
answer: \frac{n}{b^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=147186
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the ellipse $\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}=1(a>b>0)$ with the left focus at $F, P_{1}, P_{2}, \cdots, P_{n}$ being $n$ points arranged in a clockwise order on the ellipse, and $\angle P_{1} F P_{2}=\angle P_{2} F P_{3}=\angle P_{3} F P_{4}=\cdots$ $=\angle P_{n} F P_{1}$,
find the sum of the reciprocals of the distances from these $n$ points to the left directrix $x=-\frac{a^{2}}{c}\left(c=\sqrt{a^{2}-b^{2}}\right)$ (expressed in terms of $a, b, c, n$).
