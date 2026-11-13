---
tag: KTM57NK0TJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471723
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70596
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2021
    source: hf-ai-mo-aops
    label: 2021 CMIMC
---
Vijay has a stash of different size stones: in particular, he has $2021$ types of stones, with sizes from $0$ through $2020$ , and he has $2r+1$ stones of size $r$ .

Vijay starts randomly (and without replacement) taking out stones from his stash and laying them out in a line. Vijay notices that the first stone of size $2020$ comes before the first stone of size $2019$ , the first stone of size $2019$ is before the first stone of size $2018$ , and so on. What is the probability of this happening?

Express your answer in terms of only basic arithmetic operations (division, exponentiation, etc.) and the factorial function.

*Proposed by Misha Ivkov*
