---
tag: 7J18NYYGTB
kind: problem
type: answer
answer: 2^k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S = \{1,2,3,\ldots,n\}$. Consider a function $f\colon S\to S$. A subset $D$ of $S$ is said to be invariant if for all $x\in D$ we have $f(x)\in D$. The empty set and $S$ are also considered as invariant subsets. By $\deg (f)$ we define the number of invariant subsets $D$ of $S$ for the function $f$.

**i)** Show that there exists a function $f\colon S\to S$ such that $\deg (f)=2$.

**ii)** Show that for every $1\leq k\leq n$ there exists a function $f\colon S\to S$ such that $\deg (f)=2^{k}$.
