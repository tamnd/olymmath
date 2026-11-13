---
tag: CK6S8F0AQR
kind: problem
type: answer
answer: \frac{1}{8}(n^{25}+4n^{15}+n^{13}+2n^{7})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given some identical $5 \times 5$ sheets of cardstock, and using $n$ colors to color the squares on each sheet such that the squares in the same position on both sides of the same sheet are the same color. If two sheets overlap and the squares in the same position on both sheets are the same color, then these two sheets are called "identical". Prove: the maximum number of distinct cardstock sheets that can be obtained is $\frac{1}{8}\left(n^{25}+4 n^{15}+n^{13}+2 n^{7}\right)$.
