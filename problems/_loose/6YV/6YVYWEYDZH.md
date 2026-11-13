---
tag: 6YVYWEYDZH
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Compute the number of real numbers $t$ such that $$t = 50 \sin(t - \lfloor t \rfloor).$$ Here $\lfloor \cdot\rfloor$ denotes the greatest integer function.

*Proposed by David Altizio*
