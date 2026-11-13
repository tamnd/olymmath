---
tag: 9TMCDFHJC9
kind: problem
type: answer
answer: \text{No, it is impossible to transform } 1220 \text{ to } 2021.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\overline{abcd}$ be $4$ digit number, such that we can do transformations on it. If some two neighboring digits are different than $0$, then we can decrease both digits by $1$ (we can transform $9870$ to $8770$ or $9760$). If some two neighboring digits are different than $9$, then we can increase both digits by $1$ (we can transform $9870$ to $9980$ or $9881$). Can we transform number $1220$ to:
$a)$ $2012$
$b)$ $2021$
