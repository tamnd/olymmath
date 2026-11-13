---
tag: JS8PE0T5KZ
kind: problem
type: answer
answer: 2019(2^{2019n} - 2^{2018n})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F$ be the set of all $n-tuples$ $(A_1,A_2,…,A_n)$ such that each $A_i$ is a subset of ${1,2,…,2019}$. Let $\mid{A}\mid$ denote the number of elements o the set $A$ . Find

$\sum_{(A_1,…,A_n)\in{F}}^{}\mid{A_1\cup{A_2}\cup...\cup{A_n}}\mid$
