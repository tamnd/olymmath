---
tag: HGQASJF8VJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 3$ be a natural number. Ana chooses the non-zero natural numbers $a_1, a_2, \dots, a_n$, and for each non-empty subset $A \subset \{1, 2, \dots, n\}$, she computes the sum $s_A = \sum_{k \in A} a_k$, then arranges these sums in increasing order, obtaining the sequence $s_1 \le s_2 \le \dots \le s_{2^{n}-1}$.
Show that there exists a subset $B \subset \{1, 2, \dots, 2^n - 1\}$, with $2^{n-2} + 1$ elements, such that, no matter what values Ana chooses for $a_1, a_2, \dots, a_n$, these values can be determined by knowing all the values $s_i$, for $i \in B$.
Cristi Săvescu
