---
tag: AC0EC7ZRHS
kind: problem
type: answer
answer: (a, b, c, d) = (2, 0, 0, 3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211359
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all 4-tuples ($a, b,c, d$) of real numbers satisfying the following four equations: $\begin{cases} ab + c + d = 3 \\
bc + d + a = 5 \\
cd + a + b = 2 \\
da + b + c = 6 \end{cases}$
