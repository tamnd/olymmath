---
tag: XVE8DBDCFX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77508
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Martin hastily poured $n$ liters of water into $n$ bottles. As a result, some bottles are more filled than others. It is then that he remembers his mission was to put exactly one liter of water in each bottle before closing the cap on it. Since he hasn't closed the caps yet, there is still time to fix his mistakes.

To do this, he chooses a first bottle, pours part of its contents into another bottle if he wishes, and then caps this first bottle. He then chooses a second bottle (which could be the one into which he partially poured the first bottle, or not), pours part of its contents into another bottle (but not into the first bottle, which is already capped) if he wishes, and then caps it. He then proceeds similarly with a third bottle, and so on, until all the bottles are capped.

Prove that, if Martin astutely chooses the bottles he caps and those into which he partially pours, he will indeed manage to fix his mistakes.

Note: the bottles are oversized and could each hold up to $n$ liters of water, which will prevent them from overflowing.
