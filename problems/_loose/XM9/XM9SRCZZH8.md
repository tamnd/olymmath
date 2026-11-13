---
tag: XM9SRCZZH8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Martha and Nadia play a game. Each has to make her own four-digit number, choosing her four digits from eight "digit cards" labelled 1-8. First Martha chooses her thousands digit, and then Nadia chooses her thousands digit. Next, Martha chooses her hundreds digit from the remaining six cards, and then Nadia chooses her hundreds digit. This process is repeated for the tens and finally the units digits of their numbers. The two four-digit numbers produced are then added together. Martha wins if the sum is not a multiple of 6 ; Nadia wins if the sum is a multiple of 6 .
Determine which player has a winning strategy (that is to say, which player can guarantee that she will win no matter which digits the other player chooses).
