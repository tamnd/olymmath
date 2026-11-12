---
tag: FHYX3VX5KF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38937
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Let $a$ be a fixed number. Prove that any polynomial $f(x)=a_{0}+a_{1} x+a_{2} x^{2}+\ldots+a_{n} x^{n}$ can be written in the form

$$
f(x)=A_{0}+A_{1}(x-a)+A_{2}(x-a)^{2}+\ldots+A_{n}(x-a)^{n}
$$

where $A_{0}, A_{1}, \ldots, A_{n}$ are constants.

b) Prove that $A_{0}=f(a), A_{1}=f^{\prime}(a), A_{2}=\frac{f^{\prime \prime}(a)}{2!}, \ldots$ $\ldots, A_{n}=\frac{f^{(n)}(a)}{n!}$
