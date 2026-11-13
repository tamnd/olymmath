---
tag: ZGMBMGRKY3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h3045868
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29193
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2023 Tournament of Towns
---
Chameleons of five colors live on the island. When one chameleon bites another, the color of bitten chameleon changes to one of these five colors according to some rule, and the new color depends only on the color of the bitten and the color of the bitting. It is known that $2023$ red chameleons can agree on a sequence of bites between
themselves, after which they will all turn blue.
What is the smallest $k$ that can guarantee that $k$ red chameleons, biting only each other, can turn blue?
(For example, the rules might be: if a red chameleon bites a green one, the bitten one changes color to blue; if a green one bites a red one, the bitten one remains red, that is, "changes color to red"; if red bites red, the bitten one changes color to yellow, etc. The rules for changing colors may be different.)
