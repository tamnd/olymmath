---
tag: VJ48PYZM7V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264519
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers one through eight are written, in that order, on a chalkboard. A mysterious higher power in possession of both an eraser and a piece of chalk chooses three distinct numbers $x$, $y$, and $z$ on the board, and does the following. First, $x$ is erased and replaced with $y$, after which $y$ is erased and replaced with $z$, and finally $z$ is erased and replaced with $x$. The higher power repeats this process some finite number of times. For example, if $(x,y,z)=(2,4,5)$ is chosen, followed by $(x,y,z)=(1,4,3)$, the board would change in the following manner:
$$12345678 \rightarrow 14352678 \rightarrow 43152678$$
Compute the number of possible final orderings of the eight numbers.
