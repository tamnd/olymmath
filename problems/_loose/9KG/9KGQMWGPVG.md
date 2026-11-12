---
tag: 9KGQMWGPVG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4508
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive real numbers $a, b, c$. It is known that

$$
(a-b) \ln c+(b-c) \ln a+(c-a) \ln b=0
$$

Prove that $(a-b)(b-c)(c-a)=0$.

Here $\ln x$ is the natural logarithm (logarithm of $x$ to the base $e$).
