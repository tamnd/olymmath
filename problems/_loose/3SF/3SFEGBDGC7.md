---
tag: 3SFEGBDGC7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the sum of the series

$$
\sum_{n=1}^{\infty}(-1)^{n} \frac{n}{\left(1+n^{3}\right)^{2}}
$$

with accuracy $\alpha=0.001$.
