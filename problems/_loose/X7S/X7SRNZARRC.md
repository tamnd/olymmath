---
tag: X7SRNZARRC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The distribution of the initial sample variants of size $n$ is given:

$$
\begin{array}{lllll}
x_{i} & x_{1} & x_{2} & \cdots & x_{k} \\
n_{i} & n_{1} & n_{2} & \cdots & n_{k}
\end{array}
$$

Prove that

$$
\bar{x}_{\mathrm{B}}=C+\left(\sum n_{i} u_{i}\right) / n
$$

where the conditional variants $u_{i}=x_{i}-C$.
