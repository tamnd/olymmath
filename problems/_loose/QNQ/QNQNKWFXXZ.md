---
tag: QNQNKWFXXZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4086
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151263
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
---
Let

$$
F(x)=\frac{1}{\left(2-x-x^{5}\right)^{2011}},
$$

and note that $F$ may be expanded as a power series so that $F(x)=\sum_{n=0}^{\infty} a_{n} x^{n}$. Find an ordered pair of positive real numbers $(c, d)$ such that $\lim _{n \rightarrow \infty} \frac{a_{n}}{n^{d}}=c$.
