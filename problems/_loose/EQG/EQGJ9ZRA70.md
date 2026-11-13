---
tag: EQGJ9ZRA70
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177901
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,1] \rightarrow \mathbf{R}$ be a continuous, non-constant function and $F$ a primitive of $f$ that satisfies $F(0)=F(1)=0$. Let $m=\min _{x \in[0,1]} f(x)$ and $M=\max _{x \in[0,1]} f(x)$. Define the function $g:[0,1] \rightarrow \mathbf{R}$ by $g(x)=x f(x)$, for all $x \in[0,1]$, and let $G$ be a primitive of $g$ that satisfies $G(0)=0$. Show that

$$
|G(1)| \leq \frac{-m M}{2(M-m)}
$$

Duong Viet Thong, AMM 11581
