---
tag: DECP35NTFW
kind: problem
type: answer
answer: S_{2}={1,2,7,12}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108817
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let set $A=\{1,2, \cdots, 19\}$. Does there exist non-empty subsets $S_{1}, S_{2}$ of set $A$ such that
(1) $S_{1} \cap S_{2}=\varnothing, S_{1} \cup S_{2}=A$;
(2) $S_{1}, S_{2}$ both have at least 4 elements;
(3) The sum of all elements in $S_{1}$ equals the product of all elements in $S_{2}$? Prove your conclusion.
