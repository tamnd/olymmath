---
tag: 4GF0EXZ57Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36978
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f$ is defined on [0; 1[ by the following rule:

$$
f(x)= \begin{cases}x+\frac{2-\sqrt{2}}{2}, & x \in\left[0 ; \frac{\sqrt{2}}{2}[\right. \\ x-\frac{\sqrt{2}}{2}, & x \in\left[\frac{\sqrt{2}}{2} ; 1[\right.\end{cases}
$$

Prove that for any interval ] $a ; b[\subset[0 ; 1[$, there exist a point $x$ from this interval and a natural number $n$ such that the point $f(f(f(\ldots f(x)) \ldots)$ ( $n$ times) is in the interval $] a ; b[$.
