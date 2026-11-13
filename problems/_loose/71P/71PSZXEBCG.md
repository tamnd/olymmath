---
tag: 71PSZXEBCG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=1, a_{n+1}=a_{n}+\frac{a_{n}^{2}}{(n+1)^{2}}, n \in N_{+}$, prove that for any positive integer $n$, we have
$$
\frac{2 n+2}{n+3}<a_{n+1}<n+1
$$
