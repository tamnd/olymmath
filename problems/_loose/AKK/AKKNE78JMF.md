---
tag: AKKNE78JMF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ positive numbers $a_{1} ; a_{2} ; \ldots ; a_{n}$, such that

$$
\prod_{i=1}^{n} a_{i}=1
$$

Prove that then

$$
\prod_{i=1}^{n}\left(1+a_{i}\right) \geq 2^{n}
$$
