---
tag: 1G8PSF0KEQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 India PRMO
    url: https://artofproblemsolving.com/community/c6h1893449
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17811
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2019
    source: hf-ai-mo-aops
    label: 2019 India PRMO
---
A $1 \times n$ rectangle ( $n \geq 1 $ ) is divided into $n$ unit ( $1 \times 1$ ) squares. Each square of this rectangle is colored red, blue or green. Let $f(n)$ be the number of colourings of the rectangle in which there are an even number of red squares. What is the largest prime factor of $f(9)/f(3)$ ? (The number of red squares can be zero.)
