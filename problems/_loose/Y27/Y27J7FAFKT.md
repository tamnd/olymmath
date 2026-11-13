---
tag: Y27J7FAFKT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253695
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{A}$ be the set of all $n\in\mathbb{N}$ for which there exist $k\in\mathbb{N}$ and $a_0,a_1,\dots,a_{k-1}\in \{1,2,\dots,9\}$ such that $a_0 \geq a_1 \geq \cdots \geq a_{k-1}$ and $n = a_0 +a_1 \cdot 10^1 +\cdots +a_{k-1}\cdot 10^{k-1}$. Let $\mathcal{B}$ be the set of all $m \in\mathbb{N}$ for which there exist $l \in\mathbb{N}$ and $b_0,b_1,\dots,b_{l-1} \in \{1,2,\dots,9\}$ such that $b_0 \leq b_1 \leq \cdots\leq b_{l-1}$ and $m = b_0 + b_1 \cdot 10^1 + \cdots+ b_{l-1}\cdot 10^{l-1}$.

- Are there infinitely many $n\in \mathcal{A}$ such that $n^2-3\in\mathcal{A} \ ?$

- Are there infinitely many $m\in \mathcal{B}$ such that $m^2-3\in\mathcal{B} \ ?$

*Proposed by Pakawut Jiradilok and Wijit Yangjit*
