---
tag: 1TM9XPCP59
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38393
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35711
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1997
    source: hf-ai-mo-aops
    label: 1997 China Team Selection Test
---
There are 1997 pieces of medicine. Three bottles $A, B, C$ can contain at most 1997, 97, 19 pieces of medicine respectively. At first, all 1997 pieces are placed in bottle $A$ , and the three bottles are closed. Each piece of medicine can be split into 100 part. When a bottle is opened, all pieces of medicine in that bottle lose a part each. A man wishes to consume all the medicine. However, he can only open each of the bottles at most once each day, consume one piece of medicine, move some pieces between the bottles, and close them. At least how many parts will be lost by the time he finishes consuming all the medicine?
