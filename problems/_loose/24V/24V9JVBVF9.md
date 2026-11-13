---
tag: 24V9JVBVF9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=175184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Divide any number into groups of three starting from the units. (The last group may consist of one or two digits.) Consider each group as a three-digit number (the last one may be one or two digits). Add every second group and the remaining ones separately. Prove that if the difference between the two resulting numbers is divisible by 7, 11, and 13, then the original number is also divisible by 7, 11, and 13. If the difference is not divisible by any of these, then the original number is also not divisible by 7, 11, or 13.
