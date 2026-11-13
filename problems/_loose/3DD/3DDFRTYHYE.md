---
tag: 3DDFRTYHYE
kind: problem
type: answer
answer: E(n) - O(n) = -1 for n = 1, and E(n) - O(n) = 0 for all n > 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=216
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider all partitions of a positive integer $n$ into a sum of (non-negative integer) exponents of $2$ (i.e. $1, 2, 4, 8, \dots$). A number in the sum is allowed to repeat an arbitrary number of times (e.g. $7 = 2 + 2 + 1 + 1 + 1$) and two partitions differing only in the order of summands are considered to be equal (e.g. $8 = 4 + 2 + 1 + 1$ and $8 = 1 + 2 + 1 + 4$ are regarded to be the same partition). Let $E(n)$ be the number of partitions in which an even number of exponents appear an odd number of times and $O(n)$ the number of partitions in which an odd number of exponents appear an odd number of times. For example, for $n = 5$ partitions counted in $E(n)$ are $5 = 4 + 1$ and $5 = 2 + 1 + 1 + 1$, whereas partitions counted in $O(n)$ are $5 = 2 + 2 + 1$ and $5 = 1 + 1 + 1 + 1 + 1$, hence $E(5) = O(5) = 2$. Find $E(n) - O(n)$ as a function of $n$.
