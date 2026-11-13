---
tag: DZCCVP301E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2021
    url: https://artofproblemsolving.com/community/c6h3036714
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57239
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250058
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2021
    source: hf-ai-mo-aops
    label: Russian TST 2021
---
A machine accepts coins of $k{}$ values $1 = a_1 <\cdots < a_k$ and sells $k{}$ different drinks with prices $0<b_1 < \cdots < b_k$ . It is known that if we start inserting coins into the machine in an arbitrary way, sooner or later the total value of the coins will be equal to the price of a drink. For which sets of numbers $(a_1,\ldots,a_k;b_1,\ldots,b_k)$ does this property hold?
