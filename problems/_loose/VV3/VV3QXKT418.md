---
tag: VV3QXKT418
kind: problem
type: answer
answer: "15"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265685
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $O$ be the set of odd numbers between 0 and 100. Let $T$ be the set of subsets of $O$ of size $25$. For any finite subset of integers $S$, let $P(S)$ be the product of the elements of $S$. Define $n= {\sum_{S \in T}} P(S)$. If you divide $n$ by 17, what is the remainder?
