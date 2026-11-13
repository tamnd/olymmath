---
tag: TWDT7AN4Q5
kind: problem
type: answer
answer: sum_i c_i + sum_{i<j} c_i c_j
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A finite collection $C$ of (not necessarily distinct) real numbers is *suitable* if it contains two numbers $a$ and $b$ such that $a+b \neq s+1$, where $s$ is the sum of all numbers in $C$; such numbers $a$ and $b$ form an *eligible* pair.

Fix an integer $n \ge 2$. A number of $n$ pairwise distinct real numbers are written on a board. A step consists in choosing an eligible pair $(a, b)$ amongst numbers on the board (if any), crossing them out and replacing them by the number
$$
\frac{(a+b)(s+1) - a^2 - ab - b^2}{s-a-b+1}.
$$

a) Prove that there is a sequence of $n-1$ steps such that at each stage the numbers on the board form a suitable collection; and

b) Determine the final number on the board in terms of the initial numbers.
