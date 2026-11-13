---
tag: 8MH2F7FRA8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all non-negative integers $n$, let $a_{n}=\left[(1+\sqrt{2})^{n}\right]$. Prove that for any $k \geq 2$,

$$
\begin{aligned}
a_{2 k} & =2 a_{2 k-1}+a_{2 k-2} \text { and } \\
a_{2 k+1} & =2 a_{2 k}+a_{2 k-1}+2
\end{aligned}
$$
