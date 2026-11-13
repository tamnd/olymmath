---
tag: 54S6SJVMVJ
kind: problem
type: answer
answer: f(r)=\frac{1}{r}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186066
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f$ that are defined for all non-zero real numbers $x$ and satisfy the following conditions:

(1) For all $x_{1}, x_{2}$ with $x_{1} \neq 0, x_{2} \neq 0, x_{1}+x_{2} \neq 0$, $f\left(\frac{1}{x_{1}+x_{2}}\right)=f\left(\frac{1}{x_{1}}\right)+f\left(\frac{1}{x_{2}}\right)$.

(2) For all $x_{1}, x_{2}$ with $x_{1} \neq 0, x_{2} \neq 0, x_{1}+x_{2} \neq 0$, $\left(x_{1}+x_{2}\right) \cdot f\left(x_{1}+x_{2}\right)=x_{1} x_{2} \cdot f\left(x_{1}\right) \cdot f\left(x_{2}\right)$.

(3) $f(1)=1$.
