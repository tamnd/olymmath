---
tag: WGH125EWHF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Thanima owns a magnificent necklace made of rubies, emeralds, and sapphires, represented by a sequence of R, E, and S. With one magical operation, she can perform one of the following actions:

- Replace a pattern RR in the necklace with a pattern ES (or ES with RR).
- Replace a pattern EEE with a pattern SR (or SR with EEE).
- Remove a pattern SS, or add a pattern SS anywhere.
- Remove a pattern RES, or add a pattern RES anywhere.

It is not possible to cyclically shift the letters due to the clasp. She also cannot flip the necklace.

Is it possible to transform a necklace containing only one sapphire into a necklace containing only one emerald using magical operations?
