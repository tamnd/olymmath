---
tag: XMHNG7P1SG
kind: problem
type: answer
answer: A_{6}^{6}\cdotA_{7}^{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96732
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 10 programs, 6 of which are singing and 4 are dancing, and it is required that at least 1 singing program is arranged between every two dancing programs.

Different ways: Then, from the 5 intervals created by these singing programs and the positions at the very beginning and end, a total of 7 possible positions, choose 4 to insert the dancing programs, which ensures that there is at least one singing program between every two dancing programs. There are $A_{7}^{4}$ different ways to do this. Therefore, there are a total of $A_{6}^{6} \cdot A_{7}^{4}$ different ways to arrange the order of the programs.
