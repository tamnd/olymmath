---
tag: ZQBDK1QX59
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219870
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is given $n$ a natural number and a circle with circumference $n$. On the circle, in clockwise direction, numbers $0,1,2,\dots n-1$ are written, in this order and in the same distance to each other. Every number is colored red or blue, and there exists a non-zero number of numbers of each color. It is known that there exists a set $S\subsetneq \{0,1,2,\dots n-1\}, |S|\geq 2$, for wich it holds: if $(x,y), x<y$ is a circle sector whose endpoints are of distinct colors, whose distance $y-x$ is in $S$, then $y$ is in $S$.

Prove that there is a divisor $d$ of $n$ different from $1$ and $n$ for wich holds: if $(x,y),x<y$ are different points of distinct colors, such that their distance is divisible by $d$, then both $x,y$ are divisible by $d$.
