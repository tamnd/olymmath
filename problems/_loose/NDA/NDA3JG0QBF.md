---
tag: NDA3JG0QBF
kind: problem
type: answer
answer: \lceil 2\sqrt{k} + 1 \rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $k$ denote by $S(k)$ the number of solutions $(x,y)\in \mathbb{Z}_+ \times \mathbb{Z}_+$ of the system
$$\begin{cases} \left\lceil\frac{x\cdot d}{y}\right\rceil\cdot \frac{x}{d}=\left\lceil\left(\sqrt{y}+1\right)^2\right\rceil \\ \mid x-y\mid =k , \end{cases}$$
where $d$ is the greatest common divisor of positive integers $x$ and $y.$ Determine $S(k)$ as a function of $k$. (Here $\lceil z\rceil$ denotes the smalles integer number which is bigger or equal than $z.$)
