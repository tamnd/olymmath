---
tag: 4Z0NCY8DYM
kind: problem
type: answer
answer: 0 < a < 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241876
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be real numbers. Given a matrix $A=\left(\begin{array}{cc} a & 1-a \\ 1-a & a \end{array}\right).$ Let $\left(\begin{array}{c} x_0 \\ y_0 \end{array}\right)=\left(\begin{array}{c} 1 \\ 0 \end{array}\right),$ and the sequences $\{x_n\},\ \{y_n\}$ are defined by the following equation.

$$ \left(\begin{array}{c} x_n \\ y_n \end{array}\right)=A \left(\begin{array}{c} x_{n-1} \\ y_{n-1} \end{array}\right),\ \ n=1,2,\ \cdots $$

then find the necessray and sufficient condition for $a$ such that the sequence $\{x_n\}$ converges.
