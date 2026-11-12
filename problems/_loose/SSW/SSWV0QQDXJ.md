---
tag: SSWV0QQDXJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h3244387
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2019
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2024
    source: hf-ai-mo-aops
    label: 2024 Olympic Revenge
---
Let $M, \alpha, \beta \in \mathbb{R} $ with $M > 0$ and $\alpha, \beta \in (0,1)$ . If $R>1$ is a real number, we say that a sequence of positive real numbers $\{ C_n \}_{n\geq 0}$ is $R$ -*inoceronte* if $ \sum_{i=1}^n R^{n-i}C_i \leq R^n \cdot M$ for all $n \geq 1$ . Determine the smallest real $R>1$ for which exists a $R$ -*inoceronte* sequence $ \{ C_n \}_{n\geq 0}$ such that $\sum_{n=1}^{\infty} \beta ^n C_n^{\alpha}$ diverges.
