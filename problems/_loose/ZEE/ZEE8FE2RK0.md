---
tag: ZEE8FE2RK0
kind: problem
type: answer
answer: 3k = AB \cdot BC \cdot CA
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232341
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two points $M$ and $N$ are chosen inside a non-equilateral triangle $ABC$ such that $\angle BAM=\angle CAN$, $\angle ABM=\angle CBN$ and $$AM\cdot AN\cdot BC=BM\cdot BN\cdot CA=CM\cdot CN\cdot AB=k$$ for some real $k$. Prove that:

**a)** We have $3k=AB\cdot BC\cdot CA$.

**b)** The midpoint of $MN$ is the medicenter of $\triangle ABC$.

*Remark.* The **medicenter** of a triangle is the intersection point of the three medians:
If $A_{1}$ is midpoint of $BC$, $B_{1}$ of $AC$ and $C_{1}$ of $AB$, then $AA_{1}\cap BB_{1}\cap CC_{1}= G$, and $G$ is called medicenter of triangle $ABC$.

* Nikolai Nikolov*
