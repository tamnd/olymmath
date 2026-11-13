---
tag: MPYM6ANVA0
kind: problem
type: answer
answer: 3\leqslantk\leqslantp-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80680
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number satisfying $p>3$ and $k \geqslant 2$. Théo and Vincent play the following game: Théo chooses a permutation $a_{1}, \ldots, a_{k}$ of the integers $1, \ldots, k$, and tells Vincent what $a_{i} a_{j}$ modulo $p$ is for all $i \neq j$. Vincent wins if he can guess the $\left(a_{i}\right)_{1 \leqslant i \leqslant k}$. For which values of $k$ can Vincent win regardless of the permutation chosen by Théo?
