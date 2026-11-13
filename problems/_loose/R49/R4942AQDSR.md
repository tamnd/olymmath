---
tag: R4942AQDSR
kind: problem
type: answer
answer: '[n] = \{1, 2, \ldots, n\}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220324
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Geoff has an infinite stock of sweets, which come in $n$ flavours. He arbitrarily distributes some of the sweets amongst $n$ children (a child can get sweets of any subset of all flavours, including the empty set). Call a distribution $k-\textit{nice}$ if every group of $k$ children together has sweets in at least $k$ flavours. Find all subsets $S$ of $\{ 1, 2, \dots, n \}$ such that if a distribution of sweets is $s$-nice for all $s \in S$, then it is $s$-nice for all $s \in \{ 1, 2, \dots, n \}$.

*Proposed by Kyle Hess, USA*
