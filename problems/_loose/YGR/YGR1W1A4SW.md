---
tag: YGR1W1A4SW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A factory produces four products $P_{1}, P_{2}, P_{3}, P_{4}$. The unit profit for each product is $100, 20, 80, 140$ yuan, respectively. Producing these products requires six raw materials $M_{1}, M_{2}, \cdots, M_{6}$. The following matrix $\boldsymbol{A}=\left(a_{i j}\right)_{1 \times i}$, where $a_{i j}$ is the amount of raw material $M_{j}$ required for one unit of product $P_{i}$. Suppose the available quantities of $M_{1}, M_{2}, \cdots, M_{6}$ are $1000, 30, 20, 20, 5.195$ units, respectively. How should production be arranged to maximize profit?
$$
\boldsymbol{A}=\left(\begin{array}{llllll}
10 & 1 & 0 & 0 & 0 & 2 \\
15 & 0 & 1 & 0 & 0 & 3 \\
18 & 0 & 0 & 1 & 0 & 4 \\
21 & 0 & 0 & 0 & 1 & 5
\end{array}\right)
$$
