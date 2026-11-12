---
tag: JDRXB25BHG
kind: problem
type: answer
answer: (\underbrace{33\ldots3}_{n})^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=42134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Write down an even number of ones in a row. Subtract from the resulting number a similar number composed of a series of twos, which is half as long as the first series of ones. In doing so, you will get a perfect square. (For example, $1111-22=1089=33^{2}$.) Could you explain why?
