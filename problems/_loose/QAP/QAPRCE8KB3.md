---
tag: QAPRCE8KB3
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x, y, z \geqslant 0$, and at most one of them is 0. Find
$$
f(x, y, z)=\sum \sqrt{\frac{x^{2}+256 y z}{y^{2}+z^{2}}}
$$

the minimum value, where $\sum$ denotes the cyclic sum.
