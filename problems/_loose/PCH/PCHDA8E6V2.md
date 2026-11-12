---
tag: PCHDA8E6V2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33905
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi, \xi_{1}, \xi_{2}, \ldots$ be i.i.d. random variables. Prove that with probability one

$$
\sup _{n} \xi_{n}=\sup \{x \in \mathbb{R}: \mathrm{P}(\xi<x)<1\}
$$
