---
tag: 1D2G9WTEBP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115936
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given real numbers $x_{1}, x_{2}, \cdots, x_{100}$ satisfy $x_{1}+x_{2}+\cdots+x_{100}=1$ and $\left|x_{k+1}-x_{k}\right| \leqslant \frac{1}{50}, k=1,2, \cdots, 99$. Prove: There exist integers $i_{1}, i_{2}, \cdots, i_{50}, 1 \leqslant i_{1}<i_{2}<\cdots<i_{50} \leqslant 100$, such that $\frac{49}{100} \leqslant x_{i_{1}}+x_{i_{2}}+\cdots+x_{i_{50}} \leqslant \frac{51}{100}$.
