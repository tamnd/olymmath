---
tag: Q0JHF5W39A
kind: problem
type: answer
answer: \frac{1}{2} (n+1)!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\in N$ $n\geq2$ and the set $X$ with $n+1$ elements. The ordered sequences $(a_{1}, a_{2},\ldots,a_{n})$ and $(b_{1},b_{2},\ldots b_{n})$ of distinct elements of $X$ are said to be $\textit{separated}$ if there exists $i\neq j$ such that $a_{i}=b_{j}$. Determine the maximal number of ordered sequences of $n$ elements from $X$ such that any two of them are $\textit{separated}$.
Note: ordered means that, for example $(1,2,3)\neq(2,3,1)$.
