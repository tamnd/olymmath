---
tag: 2S94DWB8KJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93682
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 2$, for the sets of $n$ complex numbers $A=\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}, B=\left\{b_{1}, b_{2}, \cdots, b_{n}\right\}$, prove the following identity:
$$
\sum_{k=1}^{n} \frac{\prod_{j=1}^{n}\left(a_{k}+b_{j}\right)}{\prod_{\substack{j \neq k \\ 1 \leqslant j \leqslant n}}\left(a_{k}-a_{j}\right)}=\sum_{k=1}^{n} \frac{\prod_{\substack{j=1}}^{n}\left(b_{k}+a_{j}\right)}{\prod_{\substack{j \neq k \\ 1 \leqslant j \leqslant n}}\left(b_{k}-b_{j}\right)} .
$$
