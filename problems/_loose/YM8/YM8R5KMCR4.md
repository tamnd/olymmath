---
tag: YM8R5KMCR4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3313174
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21342
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2023
    source: hf-ai-mo-aops
    label: 2023 Balkan MO Shortlist
  - at: balkan-sl/2023
    source: hf-mathnet
    label: Balkan Mathematical Olympiad BMO 2023 Short List
---
Once upon a time there are $n$ pairs of princes and princesses who are in love with each other. One day a witch comes along and turns all the princes into frogs; the frogs can be distinguished by sight but the princesses cannot tell which frog corresponds to which prince. The witch tells the princesses that if any of them kisses the frog that corresponds to the prince very that she loves then that frog will immediately transform back into a prince. If each princess can stand kissing at most $k$ frogs, what is the maximum number of princes they can be sure to save?

(The princesses may take turns kissing in any order, communicate with each other and vary their strategy for future kisses depending on information gained from past kisses.)
