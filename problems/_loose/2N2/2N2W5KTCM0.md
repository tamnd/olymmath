---
tag: 2N2W5KTCM0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2055640
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19258
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220801
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Given that the answer to this problem can be expressed as $a\cdot b\cdot c$ , where $a$ , $b$ , and $c$ are pairwise relatively prime positive integers with $b=10$ , compute $1000a+100b+10c$ .

*Proposed by Ankit Bisain*
