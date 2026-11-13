---
tag: 686HHKFSD8
kind: problem
type: answer
answer: (a_1, a_2, \ldots, a_m)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241629
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ m$ a positive integer and $ p$ a prime number, both fixed. Define $ S$ the set of all $ m$-uple of positive integers $ \vec{v} = (v_1,v_2,\ldots,v_m)$ such that $ 1 \le v_i \le p$ for all $ 1 \le i \le m$. Define also the function $ f(\cdot): \mathbb{N}^m \to \mathbb{N}$, that associates every $ m$-upla of non negative integers $ (a_1,a_2,\ldots,a_m)$ to the integer $ f(a_1,a_2,\ldots,a_m) = \sum_{\vec{v} \in S} \left(\prod_{1 \le i \le m}{v_i^{a_i}} \right)$.
Find all $ m$-uple of non negative integers $ (a_1,a_2,\ldots,a_m)$ such that $ p \mid f(a_1,a_2,\ldots,a_m)$.
*(Pierfrancesco Carlucci)*
