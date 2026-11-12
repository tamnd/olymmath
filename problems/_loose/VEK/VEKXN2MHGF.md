---
tag: VEKXN2MHGF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33936
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the Poisson distribution function

$$
F(m ; \lambda) \equiv \sum_{k=0}^{m} \frac{e^{-\lambda} \lambda^{k}}{k!}, m=0,1,2, \ldots
$$

can be expressed in terms of the incomplete gamma function as follows:

$$
F(m ; \lambda)=\frac{1}{m!} \int_{\lambda}^{\infty} x^{m} e^{-x} d x
$$
