---
tag: NB83GZRZMY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $n$ is a positive integer. Prove:
$$
\Phi_{n}(x)=\prod_{d \mid n}\left(x^{\frac{n}{d}}-1\right)^{\mu(d)} .
$$
