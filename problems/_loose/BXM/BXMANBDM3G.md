---
tag: BXMANBDM3G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164585
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{100}$ be numbers where the first and the last are positive, and for every $1<i<100$,

$$
a_{i-1}+a_{i+1} \leq 2 a_{i}
$$

Show that in this case, every $a_{i}$ is positive.
