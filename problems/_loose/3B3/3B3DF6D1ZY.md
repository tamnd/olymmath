---
tag: 3B3DF6D1ZY
kind: problem
type: answer
answer: \sum_{i=1}^m \frac{1}{\binom{n-1}{|A_i|-1}} \leq 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ A=\{A_1,\dots,A_m\}$ be a family distinct subsets of $ \{1,2,\dots,n\}$ with at most $ \frac n2$ elements. Assume that $ A_i\not\subset A_j$ and $ A_i\cap A_j\neq\emptyset$ for each $ i,j$. Prove that:
$$ \sum_{i=1}^m\frac1{\binom{n-1}{|A_i|-1}}\leq1$$
