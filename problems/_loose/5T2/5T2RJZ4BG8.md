---
tag: 5T2RJZ4BG8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34025
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X, Y, Z$ be independent random variables, and $f=f(x, y)$, $g=g(y, z)$, $h=h(z, x)$ be bounded Borel functions on $\mathbb{R}^{2}$. Prove that

$$
|\mathrm{E} f(X, Y) g(Y, Z) h(Z, X)|^{2} \leqslant \mathrm{E} f^{2}(X, Y) \mathrm{E} g^{2}(Y, Z) \mathrm{E} h^{2}(Z, X)
$$
