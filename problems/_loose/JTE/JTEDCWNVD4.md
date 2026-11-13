---
tag: JTEDCWNVD4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 AMC 8
    url: https://artofproblemsolving.com/community/c6h414151
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=67572
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=202876
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc8/2000
    source: hf-ai-mo-aops
    label: 2000 AMC 8
---
The operation $\otimes$ is defined for all nonzero numbers by $a\otimes b = \dfrac{a^2}{b}$ . Determine $[(1\otimes 2)\otimes 3] - [1\otimes (2\otimes 3)]$ . $\text{(A)}\ -\dfrac{2}{3} \text{(B)}\ -\dfrac{1}{4} \text{(C)}\ 0 \text{(D)}\ \dfrac{1}{4} \text{(E)}\ \dfrac{2}{3}$
