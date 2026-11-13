---
tag: 741GRSWVB8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1945 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1878192
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56586
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249484
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1945
    source: hf-ai-mo-aops
    label: 1945 Moscow Mathematical Olympiad
---
The side $AD$ of a parallelogram $ABCD$ is divided into $n$ equal segments. The nearest to $A$ division point $P$ is connected with $B$ . Prove that line $BP$ intersects the diagonal $AC$ at point $Q$ such that $AQ = \frac{AC}{n + 1}$
