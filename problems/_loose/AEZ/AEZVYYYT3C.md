---
tag: AEZVYYYT3C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{n}$ satisfy:
$$
a_{n}+b_{1} a_{n-1}+b_{2} a_{n-2}=5 r^{n}
$$

where $b_{1}, b_{2}$, and $r$ are constants. Prove that this sequence can satisfy a third-order homogeneous linear recurrence relation with constant coefficients, and that it has the characteristic polynomial
$$
(x-r)\left(x^{2}+b_{1} x+b_{2}\right)
$$
