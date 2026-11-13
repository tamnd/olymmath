---
tag: G695C7DEQC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(a,b)$ of positive integers satisfying the following conditions:
- $a\leq b$
- $ab$ is a perfect cube
- No divisor of $a$ or $b$ is a perfect cube greater than $1$
- $a^2+b^2=85\text{lcm}(a,b)$

*2020 CCA Math Bonanza Individual Round #12*
