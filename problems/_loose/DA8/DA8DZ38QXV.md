---
tag: DA8DZ38QXV
kind: problem
type: answer
answer: \lambda_{1}=v_{1}-\sqrt{v_{2}-v_{1}-v_{1}^{2}},\lambda_{2}=v_{1}+\sqrt{v_{2}-v_{1}-v_{1}^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the method of moments estimates for the unknown parameters $\lambda_{1}$ and $\lambda_{2}$ of the "double Poisson distribution" based on the sample $x_{1}, x_{2}, \ldots, x_{n}$

$$
P\left(X=x_{i}\right)=\frac{1}{2} \cdot \frac{\lambda_{1}^{x_{i}}-\lambda_{1}}{x_{i}!}+\frac{1}{2} \cdot \frac{\lambda_{2}^{x_{i}}-\lambda_{2}}{x_{i}!}
$$

where $x_{i}$ is the number of occurrences of the event in $n_{i}$ trials with $\lambda_{i}$ and $\lambda_{2}$ being positive numbers, and $\lambda_{2}>\lambda_{1}$.
