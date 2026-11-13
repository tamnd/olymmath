---
tag: Z41BFXW7HJ
kind: problem
type: answer
answer: "127"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an invertible $n\times n$ matrix $M$ with integer entries we define a sequence $\mathcal{S}_M=\{M_i\}_{i=0}^{\infty}$ by the recurrence $M_0=M$ ,$M_{i+1}=(M_i^T)^{-1}M_i$ for $i\geq 0$.

Find the smallest integer $n\geq 2 $ for wich there exists a normal $n\times n$ matrix with integer entries such that its sequence $\mathcal{S}_M$ is not constant and has period $P=7$ i.e $M_{i+7}=M_i$.
($M^T$ means the transpose of a matrix $M$ . A square matrix is called normal if $M^T M=M M^T$ holds).

*Proposed by Martin Niepel (Comenius University, Bratislava)..*
