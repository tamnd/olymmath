---
tag: 4P4WA09EEE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231882
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. In the $\mathit{philand}$ language, words are all finite sequences formed by the letters "$P$", "$H$" and "$I$". Philipe, who speaks only the $\mathit{philand}$ language, writes the word $PHIPHI\ldots PHI$ on a piece of paper, where $PHI$ is repeated $n$ times. He can do the following operations:

• Erase two identical letters and write in their place two different letters from the original and from each other;
(Ex: $PP\rightarrow HI$)

• Erase two distinct letters and rewrite them changing the order in which they appear;
(Ex: $PI\rightarrow IP$)

• Erase two distinct letters and write the letter distinct from the two he erased.
(Ex: $PH\rightarrow I$)

Find the largest integer $C$ such that any Philandese word of up to $C$ letters can be written by Philip through the above operations.
Note: Operations are taken on adjacent letters.
