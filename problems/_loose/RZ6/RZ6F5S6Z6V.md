---
tag: RZ6F5S6Z6V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=23
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irska
---
Suppose $A$ is an $n \times n$ array of numbers, with $n > 2$, and denote by $A(i, j)$ the number in the $i$th row and $j$th column. We say that $A$ is an *averaging array* if it has the following property: $A(i, j)$ equals the average of the three numbers $A(i, j-1)$, $A(i-1, j)$, and $A(i-1, j-1)$, whenever $i, j \in \{2, \dots, n\}$. Let $M$ be the maximum of all values $A(i, j)$ in the averaging array $A$.

a. Prove that there exists $i \in \{1, \dots, n\}$ such that either $A(i, 1)$ or $A(1, i)$ equals $M$.

b. There is a trivial way to get $A(i_0, j_0) = M$ for any fixed choice of indices $i_0, j_0 \in \{1, \dots, n\}$: just pick $A(i, j) = M$ for all $i, j$. For each fixed choice of indices $i_0, j_0 \in \{1, \dots, n\}$ either describe how to construct a non-trivial averaging array and for which $A(i_0, j_0)$ equals the maximum value $M$, or show that no such array exists.
