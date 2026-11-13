---
tag: XMMZM90WC3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Bulgaria EGMO TST
    url: https://artofproblemsolving.com/community/c6h3008117
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32922
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231969
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-egmo-tst/2016
    source: hf-ai-mo-aops
    label: 2016 Bulgaria EGMO TST
---
The eyes of a magician are blindfolded while a person $A$ from the audience arranges $n$ identical coins in a row, some are heads and the others are tails. The assistant of the magician asks $A$ to write an integer between $1$ and $n$ inclusive and to show it to the audience. Having seen the number, the assistant chooses a coin and turns it to the other side (so if it was heads it becomes tails and vice versa) and does not touch anything else. Afterwards, the bandages are removed from the magician, he sees the sequence and guesses the written number by $A$ . For which $n$ is this possible?
