---
tag: HSAVV8KCD9
kind: problem
type: answer
answer: P_{n}(x)=\frac{1}{2^{n-1}}T_{n}(x)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39137
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P_{n}(x)=x^{n}+\ldots$ be a polynomial of degree $n$ with leading coefficient 1, and suppose that $\left|P_{n}(x)\right| \leqslant \frac{1}{2^{n-1}}$ for $|x| \leqslant 1$. Then $P_{n}(x)=\frac{1}{2^{n-1}} T_{n}(x)$. (In other words, the polynomial $\frac{1}{2^{n-1}} T_{n}(x)$ is the least deviating from zero on the interval $[-1,1]$ among all polynomials of degree $n$ with leading coefficient 1.)
