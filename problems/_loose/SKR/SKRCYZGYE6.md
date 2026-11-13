---
tag: SKRCYZGYE6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80615
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p \geqslant 2$ be a prime number, and Alice and Bob play the following game. Each in turn, starting with Alice, they choose an $i \in\{0, \ldots, p-1\}$ and a number $a_{i}$ in $\{0, \ldots, 9\}$. Alice wins if and only if the number $a_{0}+10 a_{1}+\cdots+10^{p-1} a_{p-1}$ is divisible by $p$. Show that Alice has a winning strategy.
