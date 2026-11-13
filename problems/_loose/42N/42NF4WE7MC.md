---
tag: 42NF4WE7MC
kind: problem
type: answer
answer: f^{}(k)=k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90719
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer and let $S$ be the set $\{1,2, \ldots, n\}$. Define a function $f: S \rightarrow S$ by

$$
f(x)= \begin{cases}2 x & \text { if } 2 x \leq n, \\ 2 n-2 x+1 & \text { otherwise. }\end{cases}
$$

Define $f^{2}(x)=f(f(x)), f^{3}(x)=f(f(f(x)))$, and so on. If $m$ is a positive integer satisfying $f^{m}(1)=1$, prove that $f^{m}(k)=k$ for all $k \in S$.
