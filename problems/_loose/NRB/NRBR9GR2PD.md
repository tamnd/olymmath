---
tag: NRBR9GR2PD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k>1$ be an integer. A function $f: \mathbb{N}^{*} \rightarrow \mathbb{N}^{*}$ is said to be $k$-tastrophic when for any integer $n>0$, we have $f_{k}(n)=n^{k}$ where $f_{k}$ is the $k$-th iterate of $f$:

$$
f_{k}(n)=\underbrace{f \circ f \circ \cdots \circ f}_{k \text { times }}(n)
$$

For which $k$ does there exist a $k$-tastrophic function?
