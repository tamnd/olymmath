---
tag: J3S34QYRQZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove that

$$
\sum_{i=0}^{n}\binom{i}{k}\binom{n-i}{m-k}=\sum_{t=0}^{m+1}\binom{k}{i}\binom{n+1-k}{m+1-i}
$$

where $ n \geq m \geq k $ are natural numbers.
