---
tag: CTTBB2Y691
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h357153
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44017
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1992
    source: hf-ai-mo-aops
    label: 1992 Iran MO (2nd round)
---
In the sequence $\{a_n\}_{n=0}^{\infty}$ we have $a_0=1$ , $a_1=2$ and
$$a_{n+1}=a_n+\dfrac{a_{n-1}}{1+a_{n-1}^2} \forall n \geq 1$$
Prove that
$$52 < a_{1371} < 65$$
