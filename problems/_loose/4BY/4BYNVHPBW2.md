---
tag: 4BYNVHPBW2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220534
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)_{n\ge1}$ and $(b_n)_{n\ge1}$ be positive real sequences such that
$$\lim_{n\to\infty}\frac{a_{n+1}-a_n}n=a\in\mathbb R^*_+\enspace\text{and}\enspace\lim_{n\to\infty}\frac{b_{n+1}}{nb_n}=b\in\mathbb R^*_+$$
Compute
$$\lim_{n\to\infty}\left(\frac{a_{n+1}}{\sqrt[n+1]{b_{n+1}}}-\frac{a_n}{\sqrt[n]{b_n}}\right)$$

*Proposed by D.M. Bătinețu-Giurgiu and Neculai Stanciu*
