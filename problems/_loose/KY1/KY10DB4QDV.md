---
tag: KY10DB4QDV
kind: problem
type: answer
answer: N>\frac{2016^{3}+2}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of real numbers $x_{n}$ is an ordered list of reals where the first number in the list is the term $x_{1}$, the second is the term $x_{2}$, and so on. For example, the usual sequence of positive integers can be described as $x_{n}=n$ for every positive integer $n$. Some sequences can be defined by recurrence equations, where a term is defined in terms of its predecessors.

For example, the sequence of positive integers could be defined by $x_{1}=1$ and $x_{n}=x_{n-1}+1$ for every positive integer $n \geq 2$. In this way, we could calculate $x_{2}=1+1=2$, $x_{3}=2+1=3$, and so on.

Consider a sequence of real numbers defined by $x_{1}=1$ and $x_{n}=x_{n-1}+\frac{1}{x_{n-1}^{2}}$ for every positive integer $n \geq 2$.

a) Calculate $x_{2}, x_{3}$, and $x_{4}$.

b) Verify that the sequence is strictly increasing, that is, that $x_{n}>x_{n-1}$ for every positive integer $n$.

c) Notice that the sequence seems to grow very little. After calculating some initial terms, we might suspect that no term exceeds 2016, but in fact, we will prove that there are terms greater than 2016. For this, we will use the auxiliary sequence $y_{n}=x_{n}^{3}$. Prove that $y_{n}>y_{n-1}+3$ for every $n \geq 2$.
d) Prove that there exists a number $N$ such that $x_{N}>2016$.
