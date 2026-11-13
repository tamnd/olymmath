---
tag: JYDQ7VVQ4D
kind: problem
type: answer
answer: n!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90600
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S=\{1,2, \ldots, n\}$, and let $T$ be the set consisting of all nonempty subsets of $S$. The function $f: T \rightarrow S$ is "garish" if there do not exist sets $A, B \in T$ such that $A$ is a proper subset of $B$ and $f(A)=f(B)$. Determine, with proof, how many garish functions exist.
