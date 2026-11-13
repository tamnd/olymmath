---
tag: 1ARPBY3BTK
kind: problem
type: answer
answer: \sum_{i=0}^{n}\frac{C_{n}^{i}}{C_{n+-1}^{i}}=\frac{n+}{}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129354
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove by probabilistic method that $\sum_{i=0}^{n} \frac{C_{n}^{i}}{C_{n+m-1}^{i}}=\frac{n+m}{m}$.
