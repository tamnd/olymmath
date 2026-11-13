---
tag: C93KZ3NYA7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127509
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a connected graph with $n>1$ vertices, and it is known that for any two vertices $A, B$ in graph $G$, there exists a unique path connecting $A, B$. A one-to-one correspondence between the vertex set and $1, 2, \cdots, n$ is called a numbering of the vertices. For any vertex $A$, if the numbers of the vertices passed along any path starting from $A$ are all increasing, then the numbering is called "good" with respect to $A$, and $f(A)$ denotes the number of good numberings with respect to $A$. It is known that for any vertex $B \neq A$, $f(B)$ is a multiple of 2016. Prove: $f(A)$ is also a multiple of 2016.
