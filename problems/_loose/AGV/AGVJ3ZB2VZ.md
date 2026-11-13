---
tag: AGVJ3ZB2VZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107654
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a set of non-negative real numbers $S$ a good set, relative to all $x$ and $y$ in $S$, either $x+y$ is in $S$, or $|x-y|$ is in $S$. For example, if $r$ is a positive real number and $n$ is a positive integer, then $S(n, r)=\{0, r, 2 r, \cdots, n r\}$ is a good set. Prove: every good set with a finite number of elements, except $\{0\}$, either has the form $S(n, r)$, or has exactly 4 elements.
