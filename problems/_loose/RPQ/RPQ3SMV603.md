---
tag: RPQ3SMV603
kind: problem
type: answer
answer: (1, 1, \ldots, 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real numbers $x_1, \dots, x_{2016}$ that satisfy the following equation for each $1 \le i \le 2016$. (Here $x_{2017} = x_1$.)
$$ x_i^2 + x_i - 1 = x_{i+1} $$
