---
tag: AZZ7B393XY
kind: problem
type: answer
answer: (x,y,z)=(0,0,0),(0,0,),(,0,0),(0,b,0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real solutions of the system

$$
\begin{aligned}
a x+b y & =(x-y)^{2} \\
b y+c z & =(y-z)^{2} \\
c z+a x & =(z-x)^{2}
\end{aligned}
$$

where $a, b, c$ are given positive real numbers.
