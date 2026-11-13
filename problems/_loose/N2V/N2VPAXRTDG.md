---
tag: N2VPAXRTDG
kind: problem
type: answer
answer: (0,1),(0,-1),(-3,2),(-3,-2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177292
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(a ; b)$ of integers such that the system

$$
\left\lvert \begin{gathered}
x^{2}+2 a x-3 a-1=0 \\
y^{2}-2 b y+x=0
\end{gathered}\right.
$$

has exactly three real solutions.
