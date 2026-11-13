---
tag: 1X1MHYVWCZ
kind: problem
type: answer
answer: f(x)=x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185974
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f$ that are defined for all real numbers $x$ and satisfy the following conditions:

(1) For all pairs $\left(x_{1} ; x_{2}\right)$ of real numbers, $f\left(x_{1}+x_{2}\right)=f\left(x_{1}\right)+f\left(x_{2}\right)$.

(2) It holds that $f(1)=1$.

(3) For all real numbers $x \neq 0$, $f\left(\frac{1}{x}\right)=\frac{1}{x^{2}} f(x)$.
