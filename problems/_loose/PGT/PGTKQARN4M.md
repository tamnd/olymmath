---
tag: PGTKQARN4M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165615
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the function $f(n ; k)$ defined on natural numbers, we know that

$$
\begin{gathered}
f(0 ; 0)=1 ; f(0 ; n)=f(n ; 0)=0 \\
f(n ; k)=n[f(n ; k-1)+f(n-1 ; k-1)]
\end{gathered}
$$

Prove that $f(n ; k)$ is divisible by $n!$ for every natural number $k$.
