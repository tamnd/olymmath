---
tag: S5151VEWFE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h250666
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65673
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198719
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
Let $ BC$ of right triangle $ ABC$ be the diameter of a circle intersecting hypotenuse $ AB$ in $ D$ . At $ D$ a tangent is drawn cutting leg $ CA$ in $ F$ . This information is not sufficient to prove that

$ \textbf{(A)}\ DF \text{ bisects }CA \textbf{(B)}\ DF \text{ bisects }\angle CDA$
$ \textbf{(C)}\ DF = FA \textbf{(D)}\ \angle A = \angle BCD \textbf{(E)}\ \angle CFD = 2\angle A$
