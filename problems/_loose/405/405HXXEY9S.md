---
tag: 405HXXEY9S
kind: problem
type: answer
answer: (0;0;0),(0;-2;0),(0;0;6),(0;-2;6),(4;0;0),(4;-2;0),(4;0;6),(4;-2;6)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's highlight the complete squares: $\left\{\begin{array}{l}(x-2)^{2}+(y+1)^{2}=5, \\ (x-2)^{2}+(z-3)^{2}=13, \\ (y+1)^{2}+(z-3)^{2}=10 .\end{array}\right.$

Add all the equations $\left\{\begin{array}{c}(x-2)^{2}+(y+1)^{2}=5, \\ (x-2)^{2}+(z-3)^{2}=13, \\ (x-2)^{2}+(y+1)^{2}+(z-3)^{2}=14 .\end{array}\right.$

And, by subtracting the first and second from the third, we get:

$$
\left\{\begin{array}{l}
(x-2)^{2}=4 \\
(z-3)^{2}=9 \\
(y+1)^{2}=1
\end{array}\right.
$$

Solve the quadratic equations and write down all possible solutions. The system has eight solutions.
