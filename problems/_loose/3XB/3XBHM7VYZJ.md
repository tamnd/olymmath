---
tag: 3XBHM7VYZJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h47262
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55814
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249215
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2003
    source: hf-ai-mo-aops
    label: 2003 All-Russian Olympiad
---
Ana and Bora are each given a sufficiently long paper strip, one with letter $A$ written , and the other with letter $B$ . Every minute, one of them (not necessarily one after another) writes either on the left or on the right to the word on his/her strip the word written on the other strip. Prove that the day after, one will be able to cut word on Ana's strip into two words and exchange their places, obtaining a palindromic word.
