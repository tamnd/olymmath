---
tag: 179GV3YPTK
kind: problem
type: answer
answer: f(x) = x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252714
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $f: R\rightarrow R$ such that
(i) The set $\{\frac{f(x)}{x}| x\in R-\{0\}\}$ is finite
(ii) $f(x-1-f(x)) = f(x)-1-x$ for all $x$
