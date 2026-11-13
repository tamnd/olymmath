---
tag: NY0F8DQHQW
kind: problem
type: answer
answer: (1)(2^{k}-1)^{n},(2)(k+1)^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a finite set, $|S|=n, k$ is a positive integer, (1) Find the number of ordered $k$-tuples of subsets $\left(S_{1}, S_{2}, \cdots, S_{k}\right)$ of $S$ such that $\bigcap_{i=1}^{k} S_{i}=\varnothing$; (2) If $S_{1} \subseteq S_{2} \subseteq \cdots \subseteq S_{k}$, find the number of such $k$-tuples of subsets $\left(S_{1}, S_{2}, \cdots, S_{k}\right)$.
