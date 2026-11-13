---
tag: ENN2WASXK8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203540
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$a_1, a_2, \cdots, a_n$ is a sequence of 0's and 1's. T is the number of triples $(a_i, a_j, a_k)$ with $ii$ with $a_j\neq a_i$. Show that $T=\sum_{i=1}^n f(i)\cdot\left(\frac{f(i)-1}2\right)$. If n is odd, what is the smallest value of T?
