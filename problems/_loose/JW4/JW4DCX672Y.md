---
tag: JW4DCX672Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69828
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Euler's function $\varphi(n)$ is defined as the number of integers from 1 to $n$ that are coprime with $n$.

A key property of Euler's function is its multiplicativity.

For coprime $a$ and $b$, consider the table

| 1 | 2 | 3 | $\cdots$ | $b$ |
| :---: | :---: | :---: | :---: | :---: |
| $b+1$ | $b+2$ | $b+3$ | $\ldots$ | $2 b$ |
| $\ldots$ | $\ldots$ | $\ldots$ | $\ldots$ | $\cdots$ |
| $(a-1) b+1$ | $(a-1) b+2$ | $(a-1) b+3$ | $\ldots$ | $a b$ |

In which columns of this table are the numbers that are coprime with the number $b$ located?

How many numbers in each of these columns are coprime with $a$?

Prove the multiplicativity of Euler's function by answering these questions.
