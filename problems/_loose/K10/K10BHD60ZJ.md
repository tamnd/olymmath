---
tag: K10BHD60ZJ
kind: problem
type: answer
answer: "153"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a permutation of the set $\{1,2,3,...,n\}$ to be $\textit{sortable}$ if upon cancelling an appropriate term of such permutation, the remaining $n-1$ terms are in increasing order. If $f(n)$ is the number of sortable permutations of $\{1,2,3,...,n\}$, find the remainder when $$\sum\limits_{i=1}^{2018} (-1)^i \cdot f(i)$$ is divided by $1000$. Note that the empty set is considered sortable.

*Proposed by **FedeX333X***
