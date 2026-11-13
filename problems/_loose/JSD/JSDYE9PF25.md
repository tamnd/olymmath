---
tag: JSDYE9PF25
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10898
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1996
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
$A_{1}, A_{2}, \ldots, A_{n}$ are points in the plane. A non-zero real number $k_{i}$ is assigned to each point, so that the square of the distance between $A_{i}$ and $A_{j}($ for $i \neq j)$ is $k_{i}+k_{j}$. Show that $n$ is at most 4 and that if $n=4$, then $1 / k_{1}+1 / k_{2}+1 / k_{3}+1 / k_{4}=0$.
