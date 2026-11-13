---
tag: GMD3ZC01F4
kind: problem
type: answer
answer: CD
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101494
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=1, a_{2}=1, a_{n+2}=a_{n+1}+a_{n}, n \in \mathbf{N}^{*}$, then
A. There exist only a finite number of positive integers $m$, such that $a_{m}$ and $a_{m+1}$ are coprime
B. There exists at least one positive integer $m$, such that $a_{m+2} \cdot a_{m}=a_{m+1}^{2}$
C. There exist infinitely many positive integers $p$ and $q$, such that $a_{p} a_{q}-1$ is a perfect square
D. There exist infinitely many pairs of positive integers $(m, n)$, such that $a_{m} \mid\left(a_{n}^{2}+1\right)$, and $a_{n} \mid\left(a_{m}^{2}+1\right)$
