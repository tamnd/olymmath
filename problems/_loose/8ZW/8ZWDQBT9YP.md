---
tag: 8ZWDQBT9YP
kind: problem
type: answer
answer: "73"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a row that consists of digits from $ 0$ to $ 9$ and Ukrainian letters (there are $ 33$ of them) with following properties: there aren't two distinct digits or letters $ a_i$, $ a_j$ such that $ a_i > a_j$ and $ i < j$ (if $ a_i$, $ a_j$ are letters $ a_i > a_j$ means that $ a_i$ has greater then $ a_j$ position in alphabet) and there aren't two equal consecutive symbols or two equal symbols having exactly one symbol between them. Find the greatest possible number of symbols in such row.
