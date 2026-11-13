---
tag: 57FTPD7YBV
kind: problem
type: answer
answer: a_{n}=3^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112802
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive integers $\left\{a_{n}\right\}$ that satisfies the following condition: for any positive integer $n$, if we take several numbers without repetition from the set $\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}$, the absolute values of the numbers obtained by adding and subtracting these numbers are distinct positive integers, and these positive integers, together with $a_{1}, a_{2}, \cdots, a_{n}$, form the set of all positive integers from 1 to $S_{n}$, where $S_{n}$ is the sum of the first $n$ terms of the sequence $\left\{a_{n}\right\}$.
(1) Find the values of $a_{1}, a_{2}$;
(2) Find the general term formula of the sequence $\left\{a_{n}\right\}$.
