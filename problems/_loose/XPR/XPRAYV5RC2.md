---
tag: XPRAYV5RC2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2211908
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54823
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2009
    source: hf-ai-mo-aops
    label: 2009 239 Open Mathematical Olympiad
---
Non-negative integers are placed on the vertices of a $100$ -gon, the sum of the numbers is $99$ . Every minute at one of the vertices that is equal to $0$ will be replaced by $2$ and both its neighboring numbers are subtracted by $1$ . Prove that after a while a negative number will appear on the board.
