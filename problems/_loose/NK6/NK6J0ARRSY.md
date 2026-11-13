---
tag: NK6J0ARRSY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143880
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a finite set, and let $A_{1}$, $A_{2}, \cdots, A_{n} \subseteq S$. Denote $|A|$ as the number of elements in the set $A$. Prove: There exists a real-valued mapping $F$ defined on the power set of $X=\{1,2, \cdots, n\}$ (i.e., the set of all subsets of $X$) such that for any $I \subseteq X$, we have
$$
\sum_{J \subseteq I} F(J)=\left|\complement_{s}\left(\bigcap_{i \in I} A_{i}\right)\right|
$$
