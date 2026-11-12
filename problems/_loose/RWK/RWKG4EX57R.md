---
tag: RWKG4EX57R
kind: problem
type: answer
answer: \frac{1-2\lnx}{4x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34492
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Knowing the fundamental system of solutions $y_{1}=\ln x, y_{2}=x$ of the corresponding homogeneous equation, find a particular solution of the equation

$$
x^{2}(1-\ln x) y^{\prime \prime}+x y^{\prime}-y=\frac{(1-\ln x)^{2}}{x}
$$

satisfying the condition $\lim _{x \rightarrow+\infty} y=0$.
