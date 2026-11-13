---
tag: 9MW3AMCGVQ
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154459
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 21st PMO Area Stage
---
Suppose that $\left\{a_{n}\right\}_{n \geq 1}$ is an arithmetic sequence of real numbers such that
$$
\begin{aligned}
a_{1}+a_{2}+a_{3}+a_{4}+\cdots+a_{10} & =20 \\
a_{1}+a_{4}+a_{9}+a_{16}+\cdots+a_{100} & =18
\end{aligned}
$$

Compute $a_{1}+a_{8}+a_{27}+a_{64}+\cdots+a_{1000}$.
