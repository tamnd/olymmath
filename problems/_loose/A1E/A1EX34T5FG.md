---
tag: A1EX34T5FG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_1,\ldots, x_n$ and $y_1,\ldots, y_n$ be real numbers. Let $A = (a_{ij})_{1\leq i,j\leq n}$ be the matrix with entries $$a_{ij} = \begin{cases}1,&\text{if }x_i + y_j\geq 0;\\0,&\text{if }x_i + y_j < 0.\end{cases}$$ Suppose that $B$ is an $n\times n$ matrix with entries $0$, $1$ such that the sum of the elements in each row and each column of $B$ is equal to the corresponding sum for the matrix $A$. Prove that $A=B$.
