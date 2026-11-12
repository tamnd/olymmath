---
tag: YAABFCFAH5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34016
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X, Y$ be independent random variables, and $h=h(x, y)$ be a Borel function, $\mathrm{E}|h(X, Y)|^{2}<\infty$. Prove that almost surely there is a representation

$$
h(X, Y)=\mathrm{E} h(X, Y)+\sum_{m \geqslant 1} a_{m} f_{m}(X)+\sum_{n \geqslant 1} b_{n} g_{n}(Y)+\sum_{m, n \geqslant 1} c_{m n} f_{m}(X) g_{n}(Y)
$$

for some constants $\left(a_{m}\right),\left(b_{n}\right)$ and $\left(c_{m n}\right)$ and some orthonormal systems $\left(f_{m}(X)\right)$ and $\left(g_{n}(Y)\right), \mathrm{E} f_{n}(X)=\mathrm{E} g_{m}(Y)=0, m, n \geqslant 1$. (All considered series converge in $L^{2}$.) In this case,

$$
\mathrm{E}|h(X, Y)|^{2}=|\mathrm{E} h(X, Y)|^{2}+\sum_{m \geqslant 1} a_{m}^{2}+\sum_{n \geqslant 1} b_{n}^{2}+\sum_{m, n \geqslant 1} c_{m n}^{2} .
$$
