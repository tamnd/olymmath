---
tag: 3FK42K3HAY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Use a nozzle to spray each cell of a $1 \times n$ strip of grid paper. When the nozzle sprays the specified $i$-th cell ($1 \leqslant i \leqslant n$), that cell is painted black, and the adjacent left and right cells (if they exist) are independently painted black with a probability of $\frac{1}{2}$. Prove: Let $T(n)$ be the expected number of sprays required to paint all $n$ cells under the optimal strategy (which minimizes the number of sprays). Find the general formula for $T(n)$.
（Luo Hua, problem contributor）
