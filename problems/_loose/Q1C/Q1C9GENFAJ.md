---
tag: Q1C9GENFAJ
kind: problem
type: answer
answer: 3^{1007}(\begin{pmatrix}1&1&1\\1&\omega^{2}&\omega\\1&\omega&\omega^{2}\end{pmatrix})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180004
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Let the matrix $A=\left(\begin{array}{ccc}1 & 1 & 1 \\ 1 & \omega & \omega^{2} \\ 1 & \omega^{2} & \omega\end{array}\right) \in \mathcal{M}_{3}(\mathbb{C})$, where $\omega$ is a third root of unity, different from 1. Determine $A^{2015}$.

(b) Show that the matrix equation $X^{2}=\left(\begin{array}{lll}0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1\end{array}\right)$ has no solutions in the set $\mathcal{M}_{3}(\mathbb{R})$, but admits solutions in the set $\mathcal{M}_{3}(\mathbb{C})$.
