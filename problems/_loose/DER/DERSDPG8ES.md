---
tag: DERSDPG8ES
kind: problem
type: answer
answer: \frac{c_{1}a_{2}-c_{2}a_{1}}{b_{1}a_{2}-b_{2}a_{1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=40090
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Excluding the unknown $y$ from the system of equations

$$
\begin{aligned}
& a_{1} x+b_{1} y=c_{1} \\
& a_{2} x+b_{2} y=c_{2}
\end{aligned}
$$

we obtain

$$
x=\frac{c_{1} b_{2}-c_{2} b_{1}}{a_{1} b_{2}-a_{2} b_{1}}
$$

Write, without new calculations, the formula for $y$.
