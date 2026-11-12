---
tag: AXF8Q2PQHH
kind: problem
type: answer
answer: e^{-\lambda}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ be a continuous random variable with probability density

$$
p(x)=\left\{\begin{array}{cl}
\lambda e^{-\lambda x}, & x \geqslant 0 \\
0, & x<0
\end{array}\right.
$$

where $\lambda$ is a positive constant (exponential distribution). Let $\eta=\cos \xi$. Find $\mathrm{P}(\eta<0)$.
