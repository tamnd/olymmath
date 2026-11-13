---
tag: VZ3NKJTXBE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an integer greater than 1. There are $n$ lamps $L_{0}, L_{1}, \cdots, L_{n-1}$ arranged in a circular pattern, each lamp being in one of two states: "on" or "off". A series of operations $S_{0}, S_{1}, \cdots, S_{i}, \cdots$ is performed, where operation $S_{j}$ affects the state of $L_{j}$ (without changing the states of the other lamps) according to the following rules:
(1) If $L_{j-1}$ is on, then $S_{j}$ changes the state of $L_{j}$, turning it from on to off or from off to on;
(2) If $L_{j-1}$ is off, then $S_{j}$ does not change the state of $L_{j}$. The sequence of operations $\left\{S_{i}\right\}$ and the sequence of lamps $\left\{L_{i}\right\}$ should be understood modulo $n$, i.e., $L_{n}=L_{0}, L_{n+1}=L_{1}, \cdots$
Assume that all $n$ lamps are initially on. Prove that:
(i) There exists a positive integer $M(n)$ such that after $M(n)$ operations, all $n$ lamps are on again;
(ii) If $n=2^{k}$, then after $n^{2}-1$ operations, all lamps are on;
(iii) If $n=2^{k}+1$, then after $n^{2}-n+1$ operations, all lamps are on.
