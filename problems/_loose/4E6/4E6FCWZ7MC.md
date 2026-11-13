---
tag: 4E6FCWZ7MC
kind: problem
type: answer
answer: a_{n}={\begin{pmatrix}1,&p=0\\\frac{1+(-1)^{n-1}}{2},&p=1\\\frac{1-(-p)^{n}}{1+p},&0<p<1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies:
$$
a_{1}=1,\left|a_{n+1}-a_{n}\right|=p^{n}(n=1,2, \cdots) \text {, }
$$

and $\left\{a_{2 n-1}\right\}$ is a monotonically increasing sequence, $\left\{a_{2 n}\right\}$ is a strictly monotonically decreasing sequence. Find the general term formula of the sequence $\left\{a_{n}\right\}$.
