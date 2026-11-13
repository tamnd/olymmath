---
tag: D42TNX7RT1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
By $\text{rad}(x)$ we denote the product of all distinct prime factors of a positive integer $n$. Given $a \in \mathbb{N}$, a sequence $(a_n)$ is defined by $a_0 = a$ and $a_{n+1} = a_n + \text{rad}(a_n)$ for all $n \ge 0$. Prove that there exists an index $n$ for which $\frac{a_n}{\text{rad}(a_n)} = 2022$.
