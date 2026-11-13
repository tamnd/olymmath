---
tag: PDR7TM1ENA
kind: problem
type: answer
answer: p=1p=-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75961
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine for which real numbers $p$ the system of equations

$$
\begin{aligned}
& x^{2}+1=(p+1) x+p y-z, \\
& y^{2}+1=(p+1) y+p z-x, \\
& z^{2}+1=(p+1) z+p x-y
\end{aligned}
$$

with unknowns $x, y, z$ has exactly one solution in the set of real numbers.
