---
tag: WHD9NEMB4Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221874
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13798
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215635
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Let $\triangle ABC$ be a triangle with circumcircle $\Omega$ and let $N$ be the midpoint of the major arc $\widehat{BC}$ . The incircle $\omega$ of $\triangle ABC$ is tangent to $AC$ and $AB$ at points $E$ and $F$ respectively. Suppose point $X$ is placed on the same side of $EF$ as $A$ such that $\triangle XEF\sim\triangle ABC$ . Let $NX$ intersect $BC$ at a point $P$ . Given that $AB=15$ , $BC=16$ , and $CA=17$ , compute $\tfrac{PX}{XN}$ .
