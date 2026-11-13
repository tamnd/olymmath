---
tag: BHCMK5R2HB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Middle_European_Mathematical_Olympiad_MEMO/train/0000.parquet#row=89
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: memo
    source: hf-mathnet
    label: Middle European Mathematical Olympiad (MEMO) Middle European Mathematical Olympiad
---
Let $a_{1}, a_{2}, a_{3}, \ldots$ be the sequence of positive integers such that
$$
a_{1}=1 \text{ and } a_{k+1}=a_{k}^{3}+1, \text{ for all positive integers } k
$$
Prove that for every prime number $p$ of the form $3 \ell+2$, where $\ell$ is a non-negative integer, there exists a positive integer $n$ such that $a_{n}$ is divisible by $p$.
