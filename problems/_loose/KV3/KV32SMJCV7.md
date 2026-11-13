---
tag: KV32SMJCV7
kind: problem
type: answer
answer: 1,2,3,4,6,8,12,24
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105646
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$ that satisfy the following condition: if $a \in \mathbf{Z}, (a, n)=1$, then $n \mid \left(a^{2}-1\right)$.
