---
tag: ZHCPV79Z67
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231672
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $ n$,let $ V(n; b)$ be the number of decompositions of $ n$ into a
product of one or more positive integers greater than $ b$. For example,$ 36 = 6.6 =4.9 = 3.12 = 3 .3. 4$, so that $ V(36; 2) = 5$.Prove that for all positive integers $ n$; b it holds that $ V(n;b)<\frac{n}{b}$.
