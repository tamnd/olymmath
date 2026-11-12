---
tag: XMH7PY5FG2
kind: problem
type: answer
answer: 24<41<60
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32488
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At a significance level of 0.01, test the null hypothesis $H_{0}: F_{1}(x)=F_{2}(x)$ about the homogeneity of two samples, the sizes of which are $n_{1}=6, n_{2}=7$ (the first row contains the variants of the first sample; the second row contains the variants of the second sample):

$$
\begin{array}{rrrrrrrr}
x_{i} & 3 & 4 & 6 & 10 & 13 & 17 & \\
y_{i} & 1 & 2 & 5 & 7 & 16 & 20 & 22
\end{array}
$$

Accept as the alternative hypothesis $H_{1}$ : $F_{1}(x) \neq F_{2}(x)$.
