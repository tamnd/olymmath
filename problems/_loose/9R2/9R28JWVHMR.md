---
tag: 9R28JWVHMR
kind: problem
type: answer
answer: a_{n}=2n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101804
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive integers $\left\{a_{n}\right\}$, for any given positive integer $m$, the sum of the first $a_{m}$ terms of the sequence $\left\{a_{n}\right\}$ is denoted as $b_{m}$, i.e., $b_{m}=\sum_{i=1}^{a_{m}} a_{i}$. We call the sequence $\left\{b_{m}\right\}$ the derived sequence of the sequence $\left\{a_{n}\right\}$.
(1) If the derived sequence $\left\{b_{m}\right\}$ of the sequence $\left\{a_{n}\right\}$ is an arithmetic sequence, prove: the sequence $\left\{a_{n}\right\}$ is also an arithmetic sequence.
(2) Given that the sequence $\left\{b_{m}\right\}$ is the derived sequence of the sequence $\left\{a_{n}\right\}$, and for any positive integer $m$, $b_{m}=(2 m-1)^{2}$. Find the general term formula of the sequence $\left\{a_{n}\right\}$.
