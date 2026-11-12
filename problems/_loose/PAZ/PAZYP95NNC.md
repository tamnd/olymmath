---
tag: PAZYP95NNC
kind: problem
type: answer
answer: b_{n}=P(x_{0})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To compute the value of the polynomial $P(x)=a_{n} x^{n}+a_{n-1} x^{n-1}+\ldots+a_{0}$ at $x=x_{0}$, one can compute $a_{n} x_{0}^{n}$, $a_{n-1} x_{0}^{n-1}, \ldots, a_{1} x_{0}$, and then add all the obtained numbers and $a_{0}$. This requires $2 n-1$ multiplications (computing $x_{0}^{k}$ for $k=2,3, \ldots, n$ requires $n-1$ multiplications). Devise a method for computing $P\left(x_{0}\right)$ that requires only $n$ multiplications and $n$ additions (Horner's scheme).
