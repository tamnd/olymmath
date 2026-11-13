---
tag: T5CDGTC153
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $|A|$ denote the number of elements in set $A$. Suppose $S=\{0,1, \cdots, 99\}, A \subseteq S$ and $|A|=10$. If
$$
B_{i}=\left\{r_{a} \mid r_{a} \equiv a+i(\bmod 100), a \in A\right\},
$$

where $i=0,1, \cdots, 99$, prove: there exist $0 \leqslant i_{1}<i_{2}<\cdots<i_{10} \leqslant 99$, such that $\left|\bigcup_{j=1}^{10} B_{i_{j}}\right| \geqslant 50$.
