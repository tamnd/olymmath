---
tag: TACR4MPMS1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124957
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the integer sequence $\left\{a_{n}\right\}$ satisfies:
$$
a_{0}=1, a_{n}=\sum_{k=0}^{n-1} \mathrm{C}_{n}^{k} a_{k}(n \geqslant 1) \text {. }
$$

Let $m$ be a positive integer, $p$ be a prime, and $q, r$ be non-negative integers. Prove: The difference of two terms $a_{p^{m q} q+}-a_{p^{m-1} q+r}$ is divisible by $p^{m}$. [1]
