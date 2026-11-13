---
tag: 2ZR3DY0FX7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250877
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n=>2$ be a natural number. A set $S$ of natural numbers is called $complete$ if, for any integer $0<=x<n$, there is a subset of $S$ with the property that the remainder of the division by $n$ of the sum of the elements in the subset is $x$. The sum of the elements of the empty set is considered to be $0$. Show that if a set $S$ is $complete$, then there is a subset of $S$ which has at most $n-1$ elements and which is still $complete$.
