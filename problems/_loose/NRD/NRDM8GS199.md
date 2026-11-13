---
tag: NRDM8GS199
kind: problem
type: answer
answer: 1970isthetermwithindices3911,3916,7850,7857,\\1971isthetermwithindices78547861
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The following sequence has its 2nd, 6th, 10th... terms 2 more than the term preceding them; the 3rd, 7th, 11th... terms are twice the preceding term, the 4th, 8th, 12th... terms are 2 less than the preceding term, and finally, the 5th, 9th, 13th... terms are the result of dividing the preceding term by 2.

$$
6,8,16,14,7,9,18,16,8, \ldots
$$

With which sequence numbers does 1970 appear, and with which sequence numbers does 1971 appear?
