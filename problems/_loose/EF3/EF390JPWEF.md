---
tag: EF390JPWEF
kind: problem
type: answer
answer: \frac{1}{(n+1)C_{n}^{k}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54398
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
\begin{aligned}
& \frac{1}{1} \\
& \frac{1}{2} \frac{1}{2} \\
& \frac{1}{3} \frac{1}{6} \frac{1}{3} \\
& \begin{array}{llll}
\frac{1}{4} & \frac{1}{12} & \frac{1}{12} & \frac{1}{4}
\end{array} \\
& \begin{array}{lllll}
\frac{1}{5} & \frac{1}{20} & \frac{1}{30} & \frac{1}{20} & \frac{1}{5}
\end{array} \\
& \begin{array}{llllll}
\frac{1}{6} & \frac{1}{30} \frac{1}{60} \frac{1}{60} \frac{1}{30} \frac{1}{6}
\end{array}
\end{aligned}
$$

Here is a fragment of a table known as Leibniz's Triangle. Its properties are "analogous in the sense of opposition" to those of Pascal's Triangle. The numbers on the boundary of the triangle are the reciprocals of consecutive natural numbers. Each number inside is equal to the sum of the two numbers below it. Find the formula that connects the numbers from Pascal's Triangle and Leibniz's Triangle.
