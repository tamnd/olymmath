---
tag: SPQ98XWQ2Y
kind: problem
type: answer
answer: (1,2,0,1)(2,1,1,0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85330
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all quadruples $(a, b, c, d)$ of non-negative integers such that $a b = 2(1 + c d)$ and there exists a non-degenerate triangle with sides of length $a - c$, $b - d$, and $c + d$.
