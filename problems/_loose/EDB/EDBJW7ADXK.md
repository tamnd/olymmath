---
tag: EDBJW7ADXK
kind: problem
type: answer
answer: n \times \binom{k}{2} \times \left\lfloor \frac{n}{k} \right\rfloor^2 + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243619
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n,k$ be integers such that $n\geq k\geq3$. Consider $n+1$ points in a plane (there is no three collinear points) and $k$ different colors, then, we color all the segments that connect every two points. We say that an angle is good if its vertex is one of the initial set, and its two sides aren't the same color. Show that there exist a coloration such that the \\ total number of good angles is greater than $n \binom{k}{2} \lfloor(\frac{n}{k})\rfloor^2$
