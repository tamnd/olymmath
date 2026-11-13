---
tag: 2Z2MJZXC7C
kind: problem
type: answer
answer: x_{i}=60+k_{i}\cdot180(k_{i}.integer)orx_{i}=-60+l_{i}\cdot180(l_{i}.integer)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165737
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the following system of equations:

$$
\begin{aligned}
& \tan x_{i}+3 \cot x_{i}=2 \tan x_{i+1} (i=1,2, \ldots, n-1) \\
& \tan x_{n}+3 \cot x_{n}=2 \tan x_{1} .
\end{aligned}
$$
