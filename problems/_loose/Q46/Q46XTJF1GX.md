---
tag: Q46XTJF1GX
kind: problem
type: answer
answer: "87"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79981
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the inverse of 36 modulo 101.

Theorem 2 (Chinese Remainder Theorem (CRT)).

Let $m_{1}, m_{2} \in$ be two coprime integers. Let $r_{1}, r_{2} \in \mathbb{N}$. There exists a unique $r \in$ $\left\{0, \ldots, m_{1} m_{2}-1\right\}$ such that:

$$
x \equiv r_{1}\left[m_{1}\right] \text { and } x \equiv r_{2}\left[m_{2}\right] \Longleftrightarrow x \equiv r\left[m_{1} m_{2}\right]
$$
