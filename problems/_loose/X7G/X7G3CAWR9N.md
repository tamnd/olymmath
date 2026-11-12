---
tag: X7G3CAWR9N
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\log _{2} x=y$. The equation will take the form $|y-1|^{3}+|y+1|^{3}=28$. For $y \geqslant 1$ and $y \leqslant-1$, the function on the left side of the equation is monotonic, so the equation has no more than one solution, which is easily guessed: $y=2$ and $y=-2$. For $|y|<1$, there are no solutions, since each term on the left side is less than 8.
