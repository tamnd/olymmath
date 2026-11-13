---
tag: TA3B85ZZE1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220578
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence of real numbers $(a_n)_{n\ge1}$ such that
$$\lim_{n\to\infty}\frac1{n^r}\sum_{k=1}^n\frac{a_k}k=l\in\mathbb R,r\in\mathbb N^*$$
Show that:
$$\lim_{n\to\infty}\left(\dfrac{ \sum_{p=n+1}^{2n}\sum_{k=1}^p\sum_{i=1}^k\frac{a_i}{p\cdot i}}{n^{r+1}}\right)=l\left(\frac{2^{r+1}}{r(r+1)}-\frac{2^r}{(r+1)^2}\right)$$

*Proposed by Florin Stănescu and Şerban Cioculescu*
