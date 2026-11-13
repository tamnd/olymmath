---
tag: BXSXHQZXAK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143482
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any permutation $\left(x_{1}, x_{2}, \cdots, x_{n}\right)$ of $1,2, \cdots, n\left(n \in \mathbf{N}_{+}, n>2012\right)$, define:
$$
L=\sum_{i=1}^{n}\left|x_{i}-\sqrt{3} x_{i+1}\right|\left(x_{n+1}=x_{1}\right) .
$$

Find $L_{\text {max }}$, $L_{\text {min }}$, and the number of all permutations $\left(x_{1}, x_{2}, \cdots, x_{n}\right)$ that achieve the maximum value.
