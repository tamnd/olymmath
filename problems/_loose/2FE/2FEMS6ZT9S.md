---
tag: 2FEMS6ZT9S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39058
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $F(n)=\prod_{d \mid n} f(d)$, then

$$
f(n)=\prod_{d \mid n} F(n / d)^{\mu(d)}=\prod_{d \mid n} F(d)^{\mu(n / d)}
$$
