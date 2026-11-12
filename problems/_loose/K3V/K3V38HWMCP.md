---
tag: K3V38HWMCP
kind: problem
type: answer
answer: 96\pi(1-9\pi)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Compute the line integral

$$
J=\int_{C}(2 x+4 z) d x+(2 y+2 z) d y-12 z d z
$$

along one turn of the helical line $C$ :

$$
\begin{aligned}
& x=2 \cos 4 t, \\
& y=2 \sin 4 t, \\
& z=6 t, 0 \leq t \leq 2 \pi
\end{aligned}
$$
