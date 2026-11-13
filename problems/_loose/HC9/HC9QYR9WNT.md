---
tag: HC9QYR9WNT
kind: problem
type: answer
answer: "1994"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160597
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any real number $x$, let $\lceil x\rceil$ denote the smallest integer that is greater than or equal to $x$ and $\lfloor x\rfloor$ denote the largest integer that is less than or equal to $x$ (for example, $\lceil 1.23\rceil=2$ and $\lfloor 1.23\rfloor=1$ ). Find the value of
$$
\sum_{k=1}^{2010}\left[\frac{2010}{k}-\left\lfloor\frac{2010}{k}\right\rfloor\right] \text {. }
$$
