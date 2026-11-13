---
tag: R4872WAJHB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S = \{ a_0, a_1, a_2, a_3, \dots \}$ be a set of positive integers with $1 = a_0 < a_1 < a_2 < a_3 < \dots$. For a subset $T$ of $S$, let $\sigma(T)$ be the sum of the elements of $T$. For instance, $\sigma(\{1, 2, 3\}) = 6$. By convention, $\sigma(\emptyset) = 0$, where $\emptyset$ denotes an empty set. Call a number $n$ representable if there exists a subset $T$ of $S$ such that $\sigma(T) = n$. We aim to prove for any set $S$ satisfying $a_{k+1} \le 2a_k$ for every $k \ge 0$, that all non-negative integers are representable.

(a) Prove there is a unique value of $a_1$, and find this value. Use this to determine, with proof, all possible sets $\{a_0, a_1, a_2, a_3 \}$. (Hint: there are 7 possible sets.)

(b) Show that if $a_k \le n \le a_{k+1} - 1$, then $0 \le n - a_k \le a_k - 1$.

(c) Prove that any non-negative integer is representable.
