---
tag: QVFG1MQ9FW
kind: problem
type: answer
answer: f(x)=\frac{1}{1-x-x^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{0}=a_{1}=1, a_{n}=a_{n-1}+a_{n-2}(n=2,3, \cdots)$, find the generating function of the sequence $\left\{a_{n}\right\}$.
