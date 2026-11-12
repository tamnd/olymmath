---
tag: TPJW6398YE
kind: problem
type: answer
answer: 7,-7,1,-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=17769
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
According to the condition, we write the equation where $x$ is the given number: $x^{2}+15=y^{2}$, $y$ is an integer. We transform the equation and solve it in integers. $\mathrm{y}^{2}-\mathrm{x}^{2}=15$, $(\mathrm{y}-\mathrm{x})(\mathrm{y}+\mathrm{x})=15$. From this, we obtain eight systems of equations:

1), 2) $y-x= \pm 1$, $y+x= \pm 15$; 3), 4) $y-x= \pm 15, y+x= \pm 1$; 5), 6) $y-x= \pm 3, y+x= \pm 5$; 7), 8) $y-x= \pm 5, y+x= \pm 3$

The solutions to these systems are the pairs: $(7,8),(-7,-8),(-7,8),(7,-8),(1,4),(-1,-4)$, $(-1,4),(1,-4)$.
