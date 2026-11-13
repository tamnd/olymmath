---
tag: JHHZSE26FZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133066
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive sequence $\left\{a_{n}\right\}$ satisfies:
$$
a_{1}=a_{2}=1, a_{3}=997, a_{n+3}=\frac{1993+a_{n+2} \cdot a_{n+1}}{a_{n}}, n \in N .
$$

Prove that all $a_{n}$ are integers.
