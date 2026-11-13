---
tag: WK28P02GWE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each given natural number $n \geq 2$, investigate whether among all $n$-tuples $\left(x_{1}, x_{2}, \ldots, x_{n}\right)$ of real numbers for which

$$
x_{i} \geq \frac{1}{n^{2}} (i=1,2, \ldots, n) \text { and } x_{1}+x_{2}+\ldots+x_{n}=1
$$

holds, there is one for which the term

$$
s=\frac{1}{x_{1}}+\frac{1}{x_{2}}+\ldots+\frac{1}{x_{n}}
$$

a) attains a smallest value

b) attains a largest value. If this is the case, determine in dependence on $n$ this smallest and largest value, respectively.
