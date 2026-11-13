---
tag: YRNE99Z1R6
kind: problem
type: answer
answer: All prime numbers greater than four
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=341
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran 41th Iranian Mathematical Olympiad
---
Given a positive integer $n$, we say two sets $A$ and $B$ of integers are congruent modulo $n$ if and only if the residues of elements of $A$ modulo $n$ are the same as the residues of elements of $B$ modulo $n$, and we write $A \equiv B \pmod{n}$. For example,
$$
\{3, 5, 8\} \equiv \{-4, 0, 9, 15\} \pmod{3}
$$
We say that two sets $A$ and $B$ of integers are translatable modulo $n$ if there is a polynomial $f(x)$ with integer coefficients such that either $f(A) \equiv B \pmod{n}$ or $f(B) \equiv A \pmod{n}$. Here, by $f(X)$ for a subset $X$ of integers we mean: $f(X) = \{f(x) : x \in X\}$.
Find all positive integers $n > 4$ such that every two non-empty subsets of $\{0, 1, \dots, n-1\}$ are translatable modulo $n$.
