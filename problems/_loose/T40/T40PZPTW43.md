---
tag: T40PZPTW43
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be the set of all non-negative integers and for each $n \in N$ denote $n'= n +1$. The function $A : N^3 \to N$ is defined as follows:
(i) $A(0, m, n) = m'$ for all $m, n \in N$
(ii) $A(k', 0, n) =\left\{ \begin{array}{ll}
n & if k = 0 \\
0 & if k = 1, \\
1 & if k > 1 \end{array} \right.$ for all $k, n \in N$
(iii) $A(k', m', n) = A(k, A(k',m,n), n)$ for all $k,m, n \in N$.
Compute $A(5, 3, 2)$.

(H. Nestra)
