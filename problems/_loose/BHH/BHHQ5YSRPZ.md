---
tag: BHHQ5YSRPZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1904892
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17898
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219473
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2019
    source: hf-ai-mo-aops
    label: 2019 Iran MO (3rd Round)
---
A bear is in the center of the left down corner of a $100*100$ square .we call a cycle in this grid a bear cycle if it visits each square exactly ones and gets back to the place it started.Removing a row or column with compose the bear cycle into number of pathes.Find the minimum $k$ so that in any bear cycle we can remove a row or column so that the maximum length of the remaining pathes is at most $k$ .
