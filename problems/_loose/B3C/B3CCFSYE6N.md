---
tag: B3CCFSYE6N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204630
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Fibonacci sequence is defined by $F_1 = F_2 = 1$ and $F_{n+2} = F_{n+1}+F_n$ for every integer $n$. A sequence $(a_n)$ of integers is said to be $\textit{phirme}$ if there is a fixed integer $k$ such that $a_n + a_{n+1} = F_{n+k}$ for all $n \geq 1$. Show that if $(a_n)$ is a $\textit{phirme}$ sequence, then there exists an integer $c$ such that $$a_n = F_{n+k-2} + (-1)^nc.$$
