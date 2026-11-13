---
tag: W7MAXM2M9M
kind: problem
type: answer
answer: \frac{(p-1)(q-1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $p, q$ two integers that are coprime, establish that $\sum_{k=0}^{q-1}\left\lfloor\frac{k p}{q}\right\rfloor=\frac{(p-1)(q-1)}{2}$.
