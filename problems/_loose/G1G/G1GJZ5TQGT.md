---
tag: G1GJZ5TQGT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1985 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h366639
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24588
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1985
    source: hf-ai-mo-aops
    label: 1985 IMO Longlists
---
Prove that a triangle with angles $\alpha, \beta, \gamma$ , circumradius $R$ , and area $A$ satisfies
$$\tan \frac{ \alpha}{2}+\tan \frac{ \beta}{2}+\tan \frac{ \gamma}{2} \leq \frac{9R^2}{4A}.$$
