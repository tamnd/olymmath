---
tag: EK3083HGWC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250773
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Adel draws an $m \times n$ grid of dots on the coordinate plane, at the points of integer coordinates $(a,b)$ where $1 \le a \le m$ and $1 \le b \le n$. He proceeds to draw a closed path along $k$ of these dots, $(a_1, b_1)$,$(a_2,b_2)$,...,$(a_k,b_k)$, such that $(a_i,b_i)$ and $(a_{i+1}, b_{i+1})$ (where $(a_{k+1}, b_{k+1}) = (a_1, b_1)$) are $1$ unit apart for each $1 \le i \le k$. Adel makes sure his path does not cross itself, that is, the $k$ dots are distinct. Find, with proof, the maximum possible value of $k$ in terms of $m$ and $n$.
