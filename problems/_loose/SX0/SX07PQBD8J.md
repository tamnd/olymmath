---
tag: SX07PQBD8J
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77023
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=52
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 63rd Czech and Slovak Mathematical Olympiad
---
Let us call by an "edge" any segment of length 1 which is common to two adjacent fields of a given chessboard $8 \times 8$. Consider all possible cuttings of the chessboard into 32 pieces $2 \times 1$ and denote by $n(e)$ the total number of such cuttings that involve the given edge $e$. Determine the last digit of the sum of the numbers $n(e)$ over all the edges $e$.

(Michal Rolínek)
