---
tag: KAXH5EHVK6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N_0$ be the set of all non-negative integers and let $f : N_0 \times N_0 \to [0, +\infty)$ be a function such that $f(a, b) = f(b, a)$ and $$f(a, b) = f(a + 1, b) + f(a, b + 1),$$ for all $a, b \in N_0$. Denote by $x_n = f(n, 0)$ for all $n \in N_0$.
Prove that for all $n \in N_0$ the following inequality takes place $$2^n x_n \ge x_0.$$
