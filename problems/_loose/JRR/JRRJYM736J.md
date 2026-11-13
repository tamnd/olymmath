---
tag: JRRJYM736J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive sequences $\left\{a_{n}\right\},\left\{b_{n}\right\}$ satisfy: $a_{1}=1, b_{1}=2, a_{n+1}=a_{n}+\frac{b_{n}}{a_{n}}, b_{n+1}=b_{n}+\frac{a_{n}}{b_{n}}$. Prove: (1) $50<b_{50}<a_{50}<51$;
(2) $a_{50}-b_{50}<\frac{1}{2450}$.
