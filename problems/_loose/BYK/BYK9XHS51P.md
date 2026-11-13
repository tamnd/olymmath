---
tag: BYK9XHS51P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)_{n \in \mathbb{N}}$ be a sequence of integers. Define $a_n^{(0)} = a_n$ for all $n \in \mathbb{N}$. For all $M \geq 0$, we define $(a_n^{(M + 1)})_{n \in \mathbb{N}}: a_n^{(M + 1)} = a_{n + 1}^{(M)} - a_n^{(M)}, \forall n \in \mathbb{N}$. We say that $(a_n)_{n \in \mathbb{N}}$ is $\textrm{(M + 1)-self-referencing}$ if there exists $k_1$ and $k_2$ fixed positive integers such that $a_{n + k_1} = a_{n + k_2}^{(M + 1)}, \forall n \in \mathbb{N}$.

(a) Does there exist a sequence of integers such that the smallest $M$ such that it is $\textrm{M-self-referencing}$ is $M = 2022$?

(a) Does there exist a stricly positive sequence of integers such that the smallest $M$ such that it is $\textrm{M-self-referencing}$ is $M = 2022$?
