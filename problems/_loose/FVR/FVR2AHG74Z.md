---
tag: FVR2AHG74Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237522
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S=\{1,2,...,100\}$ . Find number of functions $f: S\to S$ satisfying the following conditions
a)$f(1)=1$
b)$f$ is bijective
c)$f(n)=f(g(n))f(h(n))\forall n\in S$, where $g(n),h(n)$ are positive integer numbers such that $g(n)\leq h(n),n=g(n)h(n)$ that minimize $h(n)-g(n)$.
