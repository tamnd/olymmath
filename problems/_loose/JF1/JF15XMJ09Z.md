---
tag: JF15XMJ09Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38450
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35728
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2000
    source: hf-ai-mo-aops
    label: 2000 China Team Selection Test
---
**a.)** Let $a,b$ be real numbers. Define sequence $x_k$ and $y_k$ such that

$$x_0 = 1, y_0 = 0, x_{k+1} = a \cdot x_k - b \cdot y_l, y_{k+1} = x_k - a \cdot y_k \text{ for } k = 0,1,2, \ldots $$

Prove that

$$x_k = \sum^{[k/2]}_{l=0} (-1)^l \cdot a^{k - 2 \cdot l} \cdot \left(a^2 + b \right)^l \cdot \lambda_{k,l}$$

where $\lambda_{k,l} = \sum^{[k/2]}_{m=l} \binom{k}{2 \cdot m} \cdot \binom{m}{l}$

**b.)** Let $u_k = \sum^{[k/2]}_{l=0} \lambda_{k,l} $ . For positive integer $m,$ denote the remainder of $u_k$ divided by $2^m$ as $z_{m,k}$ . Prove that $z_{m,k},$ $k = 0,1,2, \ldots$ is a periodic function, and find the smallest period.
