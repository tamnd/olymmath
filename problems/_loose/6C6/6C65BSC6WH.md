---
tag: 6C65BSC6WH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=72064
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fibonacci numeral system. Prove that any natural number $n$, not exceeding $F_{\mathrm{m}}$, can be uniquely represented in the form

$$
n=\sum_{k=2}^{m} b_{k} F_{k},
$$

where all numbers $b_{2}, \ldots, b_{\mathrm{m}}$ are either 0 or 1, and among these numbers there are no two consecutive ones, that is, $b_{\mathrm{k}} b_{\mathrm{k}}+1$ $=0(2 \leqslant k \leqslant m-1)$. For representing a number in the Fibonacci numeral system, the notation used is:

$$
n=\left(b_{\mathrm{k}} \ldots b_{2}\right)_{\mathrm{F}}
$$
