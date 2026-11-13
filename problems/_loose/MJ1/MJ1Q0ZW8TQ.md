---
tag: MJ1Q0ZW8TQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=55
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that the set of integers $\{0, 1, 2, \dots, 2^n - 1\}$ can be partitioned into $n + 1$ disjoint subsets $A_0, A_1, \dots, A_n$ such that both of the following hold:

a) If $k + l = n$, then the subsets $A_k$ and $A_l$ have the same number of elements.

b) If $s$ and $t$ are non-negative integers and $s + t \le n$, then for an arbitrary element $z$ in the set $A_{s+t}$, there exist elements $x$ and $y$ from the sets $A_s$ and $A_t$, respectively, such that $x + y = z$.
