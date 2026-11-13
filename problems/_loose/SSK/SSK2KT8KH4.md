---
tag: SSK2KT8KH4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
*(5 pts)* Let $n$ be a positive integer, $K = \{1, 2, \dots, n\}$, and $\sigma : K \rightarrow K$ be a function with the property that $\sigma(i) = \sigma(j)$ if and only if $i = j$ (in other words, $\sigma$ is a \textit{bijection}). Show that there is a positive integer $m$ such that
$$ \underbrace{\sigma(\sigma( \dots \sigma(i) \dots ))}_\textrm{$m$ times} = i $$
for all $i \in K$.
