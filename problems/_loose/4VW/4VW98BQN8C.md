---
tag: 4VW98BQN8C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two different positive real numbers $a, b$ are given. Consider the equation

$$
\lfloor a x+b\rfloor=\lfloor b x+a\rfloor,
$$

where $\lfloor y\rfloor$ denotes the greatest integer not exceeding $y$. Prove that there exists an interval of length at least

$$
\frac{1}{\max \{a, b\}}
$$

all of whose points are solutions to the given equation.

(The length of an interval with endpoints $u, v$ is the number $|u-v|$, regardless of whether the endpoints belong to the interval.)
