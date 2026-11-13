---
tag: 9DDYX6KXZ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254185
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If real numbers $a>b>1$ satisfy the inequality$$(ab+1)^2+(a+b)^2\leq 2(a+b)(a^2-ab+b^2+1)$$what is the minimum possible value of $\dfrac{\sqrt{a-b}}{b-1}$
