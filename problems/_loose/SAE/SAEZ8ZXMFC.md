---
tag: SAEZ8ZXMFC
kind: problem
type: answer
answer: (97√2 + 40√3)/15
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo
    source: hf-mathnet
    label: China Chinese Mathematical Olympiad
---
Fix an equilateral triangle $ABC$ with side length $1$. We call $(\triangle DEF, \triangle XYZ)$ a good triangle pair if the points $D$, $E$, and $F$ lie in the interior of segments $BC$, $CA$, and $AB$, respectively, the points $X$, $Y$, and $Z$ lie on the lines $BC$, $CA$, and $AB$, respectively, and they satisfy the conditions
$$
\frac{DE}{20} = \frac{EF}{22} = \frac{FD}{38}, \text{and} DE \perp XY, EF \perp YZ, FD \perp ZX.
$$
As $(\triangle DEF, \triangle XYZ)$ runs through all good triangle pairs, determine all possible values of $\frac{1}{S_{\triangle DEF}} + \frac{1}{S_{\triangle XYZ}}$.
