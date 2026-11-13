---
tag: 42GDPXKJCD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2019
    url: https://artofproblemsolving.com/community/c6h3037338
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57223
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250042
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2019
    source: hf-ai-mo-aops
    label: Russian TST 2019
---
A school organizes optional lectures for 200 students. At least 10 students have signed up for each proposed lecture, and for any two students there is at most one lecture that both of them have signed up for. Prove that it is possible to hold all these lectures over 211 days so that no one has to attend two lectures in one day.
