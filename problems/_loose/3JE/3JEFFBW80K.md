---
tag: 3JEFFBW80K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $n \times 2 n (n \in N, n>1)$ grid, each cell is filled with a "+" or "-" sign. If an ordered integer sequence $\left(x_{1}, x_{2}, \cdots, x_{2 n}\right)$ has the following properties:
(i) $\sum_{i=1}^{2 n}\left|x_{i}\right| \neq 0$;
(ii) $\left|x_{i}\right| \leq n(i=1,2, \cdots, 2 n)$;
(iii) In the above $n \times 2 n$ grid, adding $x_{i}(i=1,2, \cdots, 2 n)$ after each "+" (or "-") sign in the $i$-th column, such that the sum of the numbers in the $j$-th row is $0(i=1,2, \cdots, n)$. Then $\left(x_{1}, x_{2}, \cdots, x_{2 n}\right)$ is called a "good sequence". Prove: There exist at least four different good sequences.
