---
tag: 2JBXC99FDV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h528400
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66818
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=201845
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
Let $ABCD$ be a regular tetrahedron and let $E$ be a point inside the face $ABC$ . Denote by $s$ the sum of the distances from $E$ to the faces $DAB$ , $DBC$ , $DCA$ , and by $S$ the sum of the distances from $E$ to the edges $AB$ , $BC$ , $CA$ . Then $\dfrac sS$ equals $\textbf{(A) }\sqrt2 \textbf{(B) }\dfrac{2\sqrt2}3 \textbf{(C) }\dfrac{\sqrt6}2 \textbf{(D) }2 \textbf{(E) }3$
