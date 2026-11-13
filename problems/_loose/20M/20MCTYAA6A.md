---
tag: 20MCTYAA6A
kind: problem
type: answer
answer: \sqrt{\frac{3}{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest constant $k$, such that for $x, y, z \in \mathbf{R}_{+}$, we have
$$
\sum \frac{x}{\sqrt{y+z}} \geqslant k \sqrt{\sum x},
$$

where, "$\sum$" denotes the cyclic sum.
