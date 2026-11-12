---
tag: DYJWVEJ9GK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $B_{m}$ be the event that exactly $m$ out of $n$ events $A_{1}, \ldots, A_{n}, 0 \leqslant m \leqslant n$, occur simultaneously.

Show that

$$
\mathrm{P}\left(B_{m}\right)=\sum_{k=m}^{n}(-1)^{k-m} C_{k}^{m} S_{k}
$$

or, in expanded form,

$$
\mathrm{P}\left(B_{m}\right)=S_{m}-C_{m+1}^{1} S_{m+1}+\ldots+(-1)^{n-m} C_{n}^{n-m} S_{n}
$$

From this, derive that the probability $\mathrm{P}\left(B_{\geqslant m}\right)$ of the event $B_{\geqslant m}$, which consists of at least $m$ out of $n$ events $A_{1}, \ldots, A_{n}$ occurring simultaneously, is given by the formula

$$
\mathrm{P}\left(B_{\geqslant m}\right)\left(=\mathrm{P}\left(B_{m}\right)+\ldots+\mathrm{P}\left(B_{n}\right)\right)=\sum_{k=m}^{n}(-1)^{k-m} C_{k-1}^{m-1} S_{k}
$$

or, equivalently,

$$
\mathrm{P}\left(B_{\geqslant m}\right)=S_{m}-C_{m}^{1} S_{m+1}+\ldots+(-1)^{n-m} C_{n-1}^{n-m} S_{n} .
$$
