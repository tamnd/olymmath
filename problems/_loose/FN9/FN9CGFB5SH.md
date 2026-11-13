---
tag: FN9CGFB5SH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=303
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil XXXI Brazilian Math Olympiad
---
Let $N = \{0, 1, 2, 3, \dots\}$. Given sets $A, B \subset N$, for each positive integer $n$ denote $r(A, B, n)$ as the number of solutions to the equation $a + b = n$, $a \in A, b \in B$.
Prove that there exists $n_0 \in N$ such that $r(A, B, n+1) > r(A, B, n)$ for all $n > n_0$ if and only if $N \setminus A$ and $N \setminus B$ are both finite.
