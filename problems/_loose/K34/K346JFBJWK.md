---
tag: K346JFBJWK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{2008}$ be 2008 integers, and $1 \leqslant \alpha_{i} \leqslant 9(i=1,2, \cdots, 2008)$. If there exists some $k \in\{1,2, \cdots, 2008\}$, such that the 2008-digit number $\overline{\alpha_{k} \alpha_{k+1} \cdots \alpha_{2008} \alpha_{1} \cdots \alpha_{k-1}}$ is divisible by 101, prove that for all $i \in\{1,2, \cdots, 2008\}$, the 2008-digit number $\overline{\alpha_{i} \alpha_{i+1} \cdots \alpha_{2008} \alpha_{1} \cdots \alpha_{i-1}}$ is also divisible by 101.
