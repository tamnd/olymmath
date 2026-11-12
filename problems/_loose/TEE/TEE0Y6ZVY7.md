---
tag: TEE0Y6ZVY7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 SEEMOUS
    url: https://artofproblemsolving.com/community/c6h3300131
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=80368
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: seemous/2024
    source: hf-ai-mo-aops
    label: 2024 SEEMOUS
---
For every $n\geq 1$ define $x_n$ by $$ x_n=\int_0^1 \ln(1+x+x^2+\dots +x^n)\cdot\ln\frac{1}{1-x}\mathrm dx. $$ a) Show that $x_n$ is finite for every $n\geq 1$ and $\lim_{n\rightarrow\infty}x_n=2$ .
b) Calculate $\lim_{n\rightarrow\infty}\frac{n}{\ln n}(2-x_n)$ .
