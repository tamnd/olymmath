---
tag: 2N3THX4B3E
kind: problem
type: answer
answer: \alpha=\frac{2}{3},\beta=\frac{3}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135764
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $n$ is a perfect square or the distance from $n$ to its nearest perfect square is a perfect cube, then $n$ is called a "good number". For example, $\left|45^{2}-2017\right|=2^{3}$, so 2017 is a good number. For a positive integer $N$, let $S(N)$ be the number of good numbers in the set $\{1$, $2, \cdots, N\}$.
(1) Find $S(2018)$;
(2) Does there exist positive real numbers $\alpha, \beta$ such that
$$
\lim _{N \rightarrow \infty} \frac{S(N)}{N^{\alpha}}=\beta ?
$$
