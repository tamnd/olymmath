---
tag: PGG5NXTS5X
kind: problem
type: answer
answer: P(x_5)=0P(x_1)+P(x_2)=P(x_3)+P(x_4)=-12
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168894
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the value of the polynomial $P(x)=x^{3}-3 x^{2}-3 x-1$ at the following points:

$$
\begin{gathered}
x_{1}=1-\sqrt{2}, x_{2}=1+\sqrt{2}, x_{3}=1-2 \sqrt{2}, x_{4}=1+2 \sqrt{2}, \\
x_{5}=1+\sqrt[3]{2}+\sqrt[3]{4}
\end{gathered}
$$

and show that $P\left(x_{1}\right)+P\left(x_{2}\right)=P\left(x_{3}\right)+P\left(x_{4}\right)$.
