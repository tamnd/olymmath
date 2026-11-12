---
tag: SPNC0W4C0G
kind: problem
type: answer
answer: \lambda_n=\frac{2n+1}{2},\quadn=0,1,2,\ldots\quad\quady_n(x)=\cos\frac{2n+1}{2}x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34499
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the eigenvalues and eigenfunctions of the boundary value problem

$$
\begin{aligned}
& y^{\prime \prime}+\lambda^{2} y=0 (\lambda \neq 0) \\
& y^{\prime}(0)=0, y(\pi)=0
\end{aligned}
$$
