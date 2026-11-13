---
tag: 8SYAAFEKT9
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247306
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the maximum possible real value of the number $ k$, such that
$$ (a + b + c)\left (\frac {1}{a + b} + \frac {1}{c + b} + \frac {1}{a + c} - k \right )\ge k$$
for all real numbers $ a,b,c\ge 0$ with $ a + b + c = ab + bc + ca$.
