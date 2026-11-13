---
tag: CDR220WBY3
kind: problem
type: answer
answer: P(X)=C\prod_{k=0}^{2018}(X+k)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79603
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P$ such that $(X+2019) P(X)=X P(X+1)$.
