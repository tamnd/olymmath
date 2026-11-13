---
tag: 9SPNZ4DQ7H
kind: problem
type: answer
answer: (x_{1},x_{2},x_{3},x_{4})=(\frac{1}{2},\frac{1}{3},\frac{1}{7},\frac{1}{42})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90436
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Yan and Jacob play the following game. Yan shows Jacob a weighted 4-sided die labelled 1, 2, 3, 4, with weights $\frac{1}{2}, \frac{1}{3}, \frac{1}{7}, \frac{1}{42}$, respectively. Then, Jacob specifies 4 positive real numbers $x_{1}, x_{2}, x_{3}, x_{4}$ such that $x_{1}+\cdots+x_{4}=1$. Finally, Yan rolls the dice, and Jacob earns $10+\log \left(x_{k}\right)$ dollars if the die shows $k$ (note this may be negative). Which $x_{i}$ should Jacob pick to maximize his expected payoff?

(Here log is the natural logarithm, which has base $e \approx 2.718$.)
