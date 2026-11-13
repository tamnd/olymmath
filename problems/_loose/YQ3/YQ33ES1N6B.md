---
tag: YQ33ES1N6B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791487
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=168
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203817
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2022
    source: hf-ai-mo-aops
    label: 2022 CMIMC
---
Daniel, Ethan, and Zack are playing a multi-round game of Tetris. Whoever wins $11$ rounds first is crowned the champion. However Zack is trying to pull off a "reverse-sweep", where (at-least) one of the other two players first hits $10$ wins while Zack is still at $0$ , but Zack still ends up being the first to reach $11$ . How many possible sequences of round wins can lead to Zack pulling off a reverse sweep?

*Proposed by Dilhan Salgado*
