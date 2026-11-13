---
tag: 6ZDHR3GMW8
kind: problem
type: answer
answer: "1999"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequences $(a_{n})$, $(b_{n})$ are deﬁned by $a_{1} = \alpha$, $b_{1} = \beta$, $a_{n+1} = \alpha a_{n} - \beta b_{n}$, $b_{n+1} = \beta a_{n} + \alpha b_{n}$ for all $n > 0.$ How many pairs $(\alpha, \beta)$ of real numbers are there such that $a_{1997} = b_{1}$ and $b_{1997} = a_{1}$?
