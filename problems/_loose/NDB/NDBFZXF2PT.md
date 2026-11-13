---
tag: NDBFZXF2PT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114786
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the recursive sequences $\left\{a_{n}\right\} 、\left\{b_{n}\right\} 、\left\{c_{n}\right\}$ satisfy for $n \in \mathbf{N}$,
$$
\begin{array}{l}
a_{n+1}=\left|b_{n}-c_{n}\right|, b_{n+1}=\left|c_{n}-a_{n}\right|, \\
c_{n+1}=\left|a_{n}-b_{n}\right| .
\end{array}
$$

Prove: For any positive integers $a_{1} 、 b_{1} 、 c_{1}$, there exists a positive integer $k$, such that
$$
a_{k+1}=a_{k}, b_{k+1}=b_{k}, c_{k+1}=c_{k} \text {. }
$$
