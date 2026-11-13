---
tag: JXHWQ7X28W
kind: problem
type: answer
answer: D) 42
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0000.parquet#row=182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a number is a *child* of another number if we can get it by placing between any two digits of the other number either nothing, a $+$, or a $\times$. For example, $145$ and $5$ are children of $12121$ because $145 = 12 \times 12 + 1$ and $5 = 1 + 2 \times 1 + 2 \times 1$. The number $15$ is both a child of $12121$ and of $33333$, because $12 + 1 + 2 \times 1 = 15 = 3 + 3 + 3 + 3 + 3$.
Which of the following numbers is also a child of both $12121$ and $33333$?
A) $18$ B) $34$ C) $39$ D) $42$ E) $45$
