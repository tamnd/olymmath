---
tag: VMF77YPWW2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=380
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
Let $n$ be an integer and $n_1$ be one of its divisors. Let $A$ be a $n \times n$ symmetric matrix defined by $a_{i,i} = 4$, $a_{i,i+1} = a_{i+1,i} = -1$ for all $i$ such that $1 \le i \le n-1$ and $i+1$ is not a multiple of $n_1$, $a_{i,i+n_1} = a_{i+n_1,i} = -1$ and $a_{i,j} = 0$ otherwise.
Prove that $A$ has an inverse and that all of the entries in the inverse are positive.
