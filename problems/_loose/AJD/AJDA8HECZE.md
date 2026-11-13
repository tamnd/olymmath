---
tag: AJDA8HECZE
kind: problem
type: answer
answer: All polynomials P(x) = ± x^l for non-negative integers l.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
Find all polynomials $P(x)$ with integral coefficients and the following property: for any pair $(u, v)$ of positive integers, $\text{gcd}(u, v) = 1$ implies $\text{gcd}(|P(u)|, |P(v)|) = 1$.
