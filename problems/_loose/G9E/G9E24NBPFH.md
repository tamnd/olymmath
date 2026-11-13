---
tag: G9E24NBPFH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190866
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an integer $n>2$, let $A, B, C, D \in M_{n}(\mathbb{R})$ be matrices satisfying:

$$
\begin{aligned}
& A C-B D=I_{n} \\
& A D+B C=O_{n}
\end{aligned}
$$

where $I_{n}$ is the identity matrix and $O_{n}$ is the zero matrix in $M_{n}(\mathbb{R})$.

Prove that:
a) $C A-D B=I_{n}$ and $D A+C B=O_{n}$,
b) $\operatorname{det}(A C) \geq 0$ and $(-1)^{n} \operatorname{det}(B D) \geq 0$.
