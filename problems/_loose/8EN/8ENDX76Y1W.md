---
tag: 8ENDX76Y1W
kind: problem
type: answer
answer: "-1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the set of pairs of real numbers $(x, y)$ satisfying the conditions:

$$
\left\{\begin{array}{l}
3^{-x} y^{4}-2 y^{2}+3^{x} \leq 0 \\
27^{x}+y^{4}-3^{x}-1=0
\end{array}\right.
$$

Calculate the values of the expression $x_{k}^{3}+y_{k}^{3}$ for each solution $\left(x_{k}, y_{k}\right)$ of the system and find the minimum among them. In the answer, specify the found minimum value, rounding it to two decimal places if necessary. If the original system has no solutions, then put the digit 0 in the answer field.
