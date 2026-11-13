---
tag: K5PMXZVAKH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the polynomial $P(x)=x^{n}+a_{1} x^{n-1}+\cdots+a_{n-1} x+a_{n}$ have complex roots $x_{1}$, $x_{2}$, $\cdots$, $x_{n}$, and let $\alpha=\frac{1}{n} \sum_{k=1}^{n} x_{k}$, $\beta^{2}=\frac{1}{n} \sum_{k=1}^{n}\left|x_{k}\right|^{2}$, and $\beta^{2}<1+|\alpha|^{2}$. If the complex number $x_{0}$ satisfies $\left|\alpha-x_{0}\right|^{2}<1-\beta^{2}+|\alpha|^{2}$, prove that $\left|P\left(x_{0}\right)\right|<1$.
