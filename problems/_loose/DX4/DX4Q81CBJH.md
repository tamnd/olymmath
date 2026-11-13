---
tag: DX4Q81CBJH
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a set $X$ with $|X| = n\geq 1$ elements. A family $\mathcal{F}$ of distinct subsets of $X$ is said to have property $\mathcal{P}$ if there exist $A,B \in \mathcal{F}$ so that $A\subset B$ and $|B\setminus A| = 1$.

i) Determine the least value $m$, so that any family $\mathcal{F}$ with $|\mathcal{F}| > m$ has property $\mathcal{P}$.
ii) Describe all families $\mathcal{F}$ with $|\mathcal{F}| = m$, and not having property $\mathcal{P}$.

(*Dan Schwarz*)
