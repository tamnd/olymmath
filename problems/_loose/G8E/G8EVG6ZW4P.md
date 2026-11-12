---
tag: G8EVG6ZW4P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6640
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In 2n barrels, 2n different reagents are filled (one reagent in each). They are divided into p pairs of conflicting reagents, but it is unknown which barrel conflicts with which. The engineer needs to find this partition. He has n empty test tubes. In one action, he can add to any test tube (empty or non-empty) a reagent from any barrel; he cannot perform any other actions with the reagents. As long as there are no conflicting reagents in the test tube, nothing happens. As soon as conflicting reagents appear among those contained in it, it bursts and can no longer be used. Nothing can be poured out of the test tube. How can the engineer achieve his goal? (A. Matveev, P. Myaktinov)
