---
tag: P0EAD0XCEG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Ukraine National Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2582010
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=62952
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254539
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/1998
    source: hf-ai-mo-aops
    label: 1998 Ukraine National Math Olympiad
---
Two players alternately write numbers in the cells of an $n\times n$ square board. Hereby, in the intersection of the $i$ -th row and the $j$ -th column the first player may write the greatest common divisor of numbers $i$ and $j$ , whereas the second player may write their least common multiple. When the board is filled up, the numbers of the first column are divided by $1$ , those of the second column by $2$ , etc., those of the last column by $n$ . Then the product of the obtained numbers in the board is computed. If the result is smaller than $1$ , the first player wins, otherwise the second player wins. Which player has a winning strategy?
