---
tag: JVZS8KZ65P
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the positive sequence $\left\{a_{n}\right\}$ satisfies:
$$
\begin{array}{l}
a_{1}=1, \\
(n+1) a_{n}^{2}-2 n a_{n+1}^{2}+\sqrt{n^{2}+n} a_{n} a_{n+1}=0, \\
z_{n}=\prod_{k=1}^{n}\left(1-\frac{i}{a_{k}}\right) \text { (i is the imaginary unit). }
\end{array}
$$

Find the value of $\left|z_{2019}-z_{2020}\right|$.
