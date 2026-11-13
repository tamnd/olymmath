---
tag: K3XQVHV8MM
kind: problem
type: answer
answer: '|r_1 - r_2 + r_3 - r_4| \leq \frac{1}{8} |AB - BC + CD - DA|'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251292
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a convex quadrilateral $ABCD$, the diagonal $AC$ intersects the diagonal $BD$ at its midpoint $S$. The radii of incircles of triangles $ABS,BCS,CDS,DAS$ are $r_1,r_2,r_3,r_4$, respectively. Prove that
$$|r_1-r_2+r_3-r_4|\le\frac18|AB-BC+CD-DA|.$$
