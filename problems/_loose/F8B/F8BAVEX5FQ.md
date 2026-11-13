---
tag: F8BAVEX5FQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h86765
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55862
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249263
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2006
    source: hf-ai-mo-aops
    label: 2006 All-Russian Olympiad
---
Given a circle and $2006$ points lying on this circle. Albatross colors these $2006$ points in $17$ colors. After that, Frankinfueter joins some of the points by chords such that the endpoints of each chord have the same color and two different chords have no common points (not even a common endpoint). Hereby, Frankinfueter intends to draw as many chords as possible, while Albatross is trying to hinder him as much as he can. What is the maximal number of chords Frankinfueter will always be able to draw?
