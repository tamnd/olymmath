---
tag: E9Q71WTGE6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Choose a four-digit number (none of them zero) and, starting with it, build a list of $21$ different numbers, each with four digits, that satisfies the following rule: after writing each new number in the list, all the averages are calculated Between two digits of that number, those averages that do not give a whole number are discarded, and with the rest a four-digit number is formed that will occupy the next place in the list. For example, if $2946$ was written in the list, the next one can be $3333$ or $3434$ or $5345$ or any other number armed with the figures $3$, $4$ or $5$.
