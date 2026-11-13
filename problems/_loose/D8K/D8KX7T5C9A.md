---
tag: D8KX7T5C9A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38395
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35712
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1998
    source: hf-ai-mo-aops
    label: 1998 China Team Selection Test
---
Find $k \in \mathbb{N}$ such that**a.)** For any $n \in \mathbb{N}$ , there does not exist $j \in \mathbb{Z}$ which satisfies the conditions $0 \leq j \leq n - k + 1$ and $\left(
\begin{array}{c}
n
j\end{array} \right), \left( \begin{array}{c}
n
j + 1\end{array} \right), \ldots, \left( \begin{array}{c}
n
j + k - 1\end{array} \right)$ forms an arithmetic progression.**b.)** There exists $n \in \mathbb{N}$ such that there exists $j$ which satisfies $0 \leq j \leq n - k + 2$ , and $\left(
\begin{array}{c}
n
j\end{array} \right), \left( \begin{array}{c}
n
j + 1\end{array} \right), \ldots , \left( \begin{array}{c}
n
j + k - 2\end{array} \right)$ forms an arithmetic progression.

Find all $n$ which satisfies part **b.)**
