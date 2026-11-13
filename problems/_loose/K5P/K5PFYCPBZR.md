---
tag: K5PFYCPBZR
kind: problem
type: answer
answer: 2011=1111\times1111-111\times11111-111\times111+111\times11\times11-111+11+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86081
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Recent years can be expressed as sums, subtractions, and multiplications of numbers with the same and unique digit; for example:

$$
2009=7 \times 7 \times 7 \times 7-7 \times 7 \times 7-7 \times 7, 2010=66 \times 6 \times 6-66 \times 6+6 \times 6-6
$$

Can the same be done with 2011, without ever repeating the same addend? For example, $2011=1+1+1+\ldots$ is not allowed.
