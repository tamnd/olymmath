---
tag: ZW7GZ25WZ1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268401
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $a>1$. Let $p_1 < p_2 <...< p_k$ be all prime divisors of $a$. For each positive integer $n$ we define:

$C_0(n) = a^{2n}, C_1(n) =\frac{a^{2n}}{p^2_1}, .... , C_k(n) =\frac{a^{2_n}}{p^2_k}$
$A = a^2 + 1$
$T(n) = A^{C_0(n)} - 1$
$M(n) = LCM(a^{2n+2}, A^{C_1(n)} - 1, ..., A^{C_k(n)} - 1)$
$A_n =\frac{T(n)}{M(n)}$

Prove that the sequence $A_1, A_2, ... $ satisfies the properties:
(i) Every number in the sequence is an integer greater than $1$ and has only prime divisors of the form $am + 1$.
(ii) Any two different numbers in the sequence are coprime.
