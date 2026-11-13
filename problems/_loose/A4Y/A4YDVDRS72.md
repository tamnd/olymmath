---
tag: A4YDVDRS72
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=1
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Math Olympiad
---
For each positive integer $N$ with $2k$ digits, let $\text{odd}(N)$ be the $k$-digit number obtained by writing the digits of odd order of $N$ and $\text{even}(N)$ be the $k$-digit number obtained by writing the digits of even order of $N$. For example, $\text{odd}(249035) = 405$ and $\text{even}(249035) = 293$. Prove that there is no positive integer $N$ with $2k$ digits such that $N = \text{odd}(N) \cdot \text{even}(N)$.
