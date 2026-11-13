---
tag: CMVA67HG61
kind: problem
type: answer
answer: (\sqrt{},\sqrt{},\cdots,\sqrt{}),(-\sqrt{},-\sqrt{},\cdots,-\sqrt{})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129706
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ask for all solutions (real numbers) of the system of equations
$$
\left\{\begin{array}{l}
x_{2}=\frac{1}{2}\left(x_{1}+\frac{a}{x_{1}}\right), \\
x_{3}=\frac{1}{2}\left(x_{2}+\frac{a}{x_{2}}\right), \\
\cdots \cdots \\
x_{n}=\frac{1}{2}\left(x_{n-1}+\frac{a}{x_{n-1}}\right), \\
x_{1}=\frac{1}{2}\left(x_{n}+\frac{a}{x_{n}}\right)
\end{array}\right.
$$

(1961 Kyiv Mathematical Olympiad)
