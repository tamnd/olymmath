---
tag: 2CMF8WJCKM
kind: problem
type: answer
answer: "204"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=194357
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each of $A, B, C$, and $D$ is a positive two-digit integer. These integers satisfy each of the equations

$$
\begin{aligned}
B & =3 C \\
D & =2 B-C \\
A & =B+D
\end{aligned}
$$

What is the largest possible value of $A+B+C+D$ ?
