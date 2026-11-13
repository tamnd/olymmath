---
tag: DE1Y55QEPZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188312
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A square is divided into $100 \times 100$ equal smaller squares. Inside the square, there are diagonal lines such that:

a) Each of them consists of segments that are sides of the smaller squares and are located inside the larger square;

b) None of them have self-intersection points;

c) Any two of them do not have common points;

d) Each of them has endpoints on the sides of the larger square.

Prove that besides the vertices of the larger square, there is at least one more point (on the sides of the larger square or inside it) through which no diagonal line passes.
