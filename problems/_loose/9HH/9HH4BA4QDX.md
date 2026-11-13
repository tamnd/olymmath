---
tag: 9HH4BA4QDX
kind: problem
type: answer
answer: No; such a tiling is impossible
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider a $100 \times 100$ square consisting of $10^4$ unit squares. We call tiles of type A the rectangular tiles $8 \times 1$ or $1 \times 8$ consisting of 8 unit squares. We call tiles of type B the rectangular tiles $4 \times 2$ or $2 \times 4$ consisting of 8 unit squares. Examine if it is possible to cover the $100 \times 100$ square by using $N$ tiles of type A and $N$ tiles of type B, for some positive integer $N$? (The tiles must be inside the initial $100 \times 100$ square and not overlapping.)
