---
tag: T22WSGKHQZ
kind: problem
type: answer
answer: 2592,2614032
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If a natural number $K$ can be expressed as
$$
\begin{aligned}
K & =V(a, b, c) \\
& =a^{3}+b^{3}+c^{3}-3 a b c (a, b, c \in \mathbf{N})
\end{aligned}
$$

then $K$ is called a "Water Cube Number".
Now, arrange all different Water Cube Numbers in ascending order to form a sequence $\left\{K_{n}\right\}$, called the Water Cube Number sequence, and let $K_{0}=0$.
(1) Find $n$ such that $K_{n}=2016$;
(2) Determine $K_{2016}$ and $S_{2016}=\sum_{n=1}^{2016} K_{n}$.
This problem is the first part of a question from the 2016 China Southeast Mathematical Olympiad, where the Water Cube Number refers to the "watered-down" version of cube numbers.
