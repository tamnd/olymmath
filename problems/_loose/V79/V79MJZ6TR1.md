---
tag: V79MJZ6TR1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11058
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2005
    source: hf-numina-olympiads
    label: JBMO-SL
---
Find all the natural numbers $m$ and $n$, such that the square of $m$ minus the product of $n$ with $k$, is 2 , where the number $k$ is obtained from $n$ by writing 1 on the left of the decimal notation of $n$.
