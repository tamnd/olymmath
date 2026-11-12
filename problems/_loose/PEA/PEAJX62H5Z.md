---
tag: PEAJX62H5Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29137
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Jury, PNR, 76). Let $I=(0 ; 1]$. For a given value $a \in(0 ; 1)$, define the function $f: I \rightarrow I$ as follows:

$$
f(x)= \begin{cases}x+-(1-a) & \text { for } 0<x \leqslant a \\ x-a & \text { for } a<x \leqslant 1\end{cases}
$$

Prove that for any interval $J \subset I$ there exists a number $n \in \mathbf{N}$ such that the intersection $f^{n}(J) \cap J$ is not empty.
