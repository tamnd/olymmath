---
tag: PM781BW4SC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p_{n}$ be the $n$-th prime number and let $\pi(n)$ be the number of prime numbers not greater than $n$. If

$$
A=\left\{n+p_{n} \mid n \in \mathbb{N}\right\} \text { and } B=\{n+\pi(n)+1 \mid n \in \mathbb{N}\}
$$

prove that $A \cap B=\varnothing$ and $A \cup B=\mathbb{N} \backslash\{1\}$.
